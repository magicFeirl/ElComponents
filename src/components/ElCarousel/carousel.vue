<template>
  <div class="el-carousel-list">
    <div :style="carouselContentStyle" class="el-carousel-list__content">
      <slot></slot>
    </div>
    <div v-if="indicator" class="el-carousel-indicator">
      <div @click="handleIndicatorClick(index)" :class="{ active: activeIndex === index }" v-for="{ index } in items"
        class="el-carousel-indicator__indicator">
      </div>
    </div>
    <div v-if="arrow" class="el-carousel-arrow-container">
      <div @click="prev" class="el-carousel-arrow el-carousel-arrow__left">&lt;</div>
      <div @click="next" class="el-carousel-arrow el-carousel-arrow__right">&gt;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElCarousel',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      items: [],
      timer: null,
      activeIndex: -1,

    }
  },
  watch: {
    activeIndex: {
      immediate: true,
      handler() {

      }
    }
  },
  computed: {
    carouselContentStyle() {
      const translate = this.activeIndex * -100
      return {
        transform: `translateX(${translate}%)`
      }
    }

  },
  methods: {
    updateItem(item) {
      this.items.push({
        item,
        index: this.items.length
      })
    },
    handleIndicatorClick(index) {
      this.$nextTick(() => {
        this.activeIndex = index
        this.resetTimer()
      })
    },
    prev() {
      this.resetTimer()
      if (this.activeIndex - 1 < 0) {
        this.activeIndex = 0
        if (this.loop) {
          this.activeIndex = this.items.length - 1
        }
      }
    },
    next() {
      this.resetTimer()
      if (this.activeIndex + 1 >= this.items.length) {
        this.activeIndex = this.items.length - 1
        if (this.loop) {
          this.activeIndex = 0
        }
      }
    },
    slideItem() {
      if (this.activeIndex <= 0) {
        this.activeIndex = 0

        if (this.loop) {
          this.activeIndex = this.items.length - 1
        }
      } else if (this.activeIndex + 1 < this.items.length) {
        this.activeIndex++
      } else if (this.loop) {
        this.activeIndex = 0
      }
    },
    startTimer() {
      this.pauseTimer()
      this.timer = setInterval(this.slideItem, this.interval)
    },
    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    resetTimer() {
      this.pauseTimer()
      this.startTimer()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slideItem(0)
      this.startTimer()
    })
  }
}
</script>

<style scoped>
.el-carousel-list {
  overflow: hidden;
  position: relative;
}

.el-carousel-indicator {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;

}

.el-carousel-indicator__indicator.active {
  background-color: #999;
}

.el-carousel-arrow__left {
  left: 1.5rem;
}

.el-carousel-arrow__right {
  right: 1.5rem;
}

.el-carousel-arrow-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 114514;
  width: 100%;
}

.el-carousel-arrow {
  user-select: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: 0.5;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
}

.el-carousel-arrow:hover {
  transform: translateY(-50%) scale(1.05);
}

.el-carousel-indicator__indicator {
  width: 30px;
  height: 2px;
  background: #000;
  opacity: 0.6;
  margin-top: 0.5rem;
  cursor: pointer;
}



.el-carousel-indicator__indicator+.el-carousel-indicator__indicator {
  margin-left: 0.5rem;
}

.el-carousel-list__content {
  display: flex;
  width: 100%;
  height: calc(100% - 1.5rem);
  display: flex;
  flex-wrap: nowrap;
  transition: all 0.3s ease;
}
</style>
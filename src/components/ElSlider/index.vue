<template>
  <div ref="sliderRef" class="my_el-slider">
    <div class="my_el-slider__runway" :style="sliderRunwayStyle"></div>
    <div @mousedown="handleSlideStart" class="my_el-slider__button" :style="sliderButtonStyle">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: 50
    }
  },
  data() {
    return {
      sliderWidth: 0,
      sliderLeft: 0,
      sliding: false
    }
  },
  computed: {
    sliderRunwayStyle() {
      return {
        width: `${this.modelValue}%`
      }
    },
    sliderButtonStyle() {
      return {
        left: `${this.modelValue}%`
      }
    }
  },
  methods: {
    calcSliderWidth() {
      const { sliderRef } = this.$refs
      if (!sliderRef) {
        return
      }
      const { left } = sliderRef.getBoundingClientRect()
      this.sliderWidth = sliderRef.clientWidth || -1
      this.sliderLeft = left
    },
    handleSlideStart(e) {
      this.sliding = true
      document.documentElement.onselectstart = (e) => { e.preventDefault(); }
      this.calcSliderWidth()
      window.addEventListener('mousemove', this.handleSlideMove)
      window.addEventListener('mouseleave', this.handleSlideDone)
      window.addEventListener('mouseup', this.handleSlideDone)
    },
    handleSlideMove(e) {
      if (!this.sliding) {
        return;
      }

      const { clientX } = e
      if (clientX >= this.sliderWidth || clientX < this.sliderLeft) {
        return;
      }

      this.$emit('update:modelValue', Math.round((clientX - this.sliderLeft) / (this.sliderWidth - this.sliderLeft) * 100))
    },
    handleSlideDone() {
      this.sliding = false
      window.removeEventListener('mousemove', this.handleSlideMove)
      window.removeEventListener('mouseleave', this.handleSlideDone)
      window.removeEventListener('mouseup', this.handleSlideDone)
    }
  },
  mounted() {
    this.calcSliderWidth()
  }
}
</script>

<style scoped>
.my_el-slider {
  height: 2px;
  background-color: grey;
  position: relative;
}

.my_el-slider__button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #409eff;
  box-sizing: border-box;
  cursor: grab;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 114514;
}

.my_el-slider__runway {
  height: 2px;
  background-color: #409eff;
}
</style>
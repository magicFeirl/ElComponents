<template>
  <div class="el-scroll-container" :style="{ maxHeight: height + 'px' }">
    <div ref="scrollRef" class="el-scroll" :style="scrollStyle">
      <slot></slot>
    </div>
    <div class="el-scroll-bar" :style="scrollBarStyle">
    </div>
  </div>
</template>

<script>
import getScrollWidth from '../../utils/getScrollWidth'

export default {
  name: 'ElScroll',
  props: {
    height: {
      type: [String, Number],
      default: 300,
    },
    scrollBarWidth: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      scrollBarTop: 0,
      scrollHeight: 0
    }
  },

  mounted() {
    this.scrollHeight = this.$refs.scrollRef.scrollHeight
    this.$refs.scrollRef.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      this.scrollBarTop = e.currentTarget.scrollTop;
    }
  },
  computed: {

    scrollWidth() {
      return getScrollWidth()
    },
    scrollStyle() {
      return {
        marginRight: -this.scrollWidth + 'px',
        maxHeight: this.height + 'px'
      }
    },
    scrollBarStyle() {
      const { clientHeight = 0, scrollHeight = 1 } = this.$refs.scrollRef || {}

      const scrollBarHeight = clientHeight * 100 / scrollHeight + '%'
      const top = this.scrollBarTop * 100 / (this.$refs.scrollRef?.clientHeight || Infinity)

      return {
        width: this.scrollBarWidth + 'px',
        height: scrollBarHeight, // to do
        transform: `translateY(${top + '%'})`,
      }
    }
  },
  beforeDestroy() {
    this.$refs.scrollRef.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
.el-scroll-container {
  overflow: hidden;
  position: relative;
}

.el-scroll {
  overflow: auto;
}

.el-scroll-bar {
  position: absolute;
  background-color: grey;
  opacity: 0.5;
  border-radius: 10px;
  top: 0;
  right: 0%;
  z-index: 12345;
}
</style>
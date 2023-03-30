<template>
  <h2>Virtual List Comp(Simple ver.)</h2>
  <div ref="virtualListRef" :class="['relative', 'virtual-list', `h-${this.listHeight}px`, 'overflow-auto']">
    <div :style="dummyRowStyle" class="absolute top-0  left-0 w-full"></div>
    <div :style="{ transform: `translate3d(0, ${offset}px, 0)` }" :class="['virtual-list-content', 'transform']">
      <div :style="{ height: `${rowHeight}px` }" v-for="item in visiableRows">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    rowHeight: {
      type: Number,
      required: true
    },
    listHeight: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      startIndex: 0,
      endIndex: 0,
      offset: 0
    }
  },
  computed: {
    height() {
      return this.rowHeight * this.data.length
    },
    dummyRowStyle() {
      return {
        'height': `${this.height}px`
      }
    },
    visiableRows() {
      return this.data.slice(this.startIndex, this.endIndex)
    },
  },
  mounted() {
    const el = this.$refs.virtualListRef
    const handleScroll = () => {
      const { scrollTop } = el
      this.startIndex = Math.floor(scrollTop / this.rowHeight)
      this.endIndex = this.startIndex + Math.ceil(this.listHeight / this.rowHeight)
      this.offset = scrollTop
    }

    handleScroll()
    el.addEventListener('scroll', handleScroll)
  }
}
</script>

<style lang="scss" scoped></style>
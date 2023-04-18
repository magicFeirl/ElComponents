<template>
  <div ref="itemRef" class="el-carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElCarouselItem',
  data() {
    return {
      index: -1
    }
  },
  mounted() {
    this.$parent.updateItem(this)
  },
  methods: {

  }
}
</script>

<style  scoped>
.el-carousel-item {
  flex: 1 0 auto;
  width: 100%;
}
</style>
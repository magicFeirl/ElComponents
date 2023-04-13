<template>
  <div class="el-breadcrumb flex text-gray-300">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  provide() {
    return {
      root: this
    }
  }
}
</script>

<style scoped>

</style>
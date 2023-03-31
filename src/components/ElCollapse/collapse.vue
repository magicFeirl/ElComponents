<template>
  <div class="collapse">
    <h2>el-collapse(slot & component comunication)</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    value: {
      tpye: [String, Number]
    }
  },
  provide() {
    return {
      'collapse': this
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick(collapseItem, index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style scoped>
.collapse {
  @apply border border-light-800 rounded
}
</style>
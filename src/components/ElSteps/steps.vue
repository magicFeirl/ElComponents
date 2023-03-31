<template>
  <h2>el-steps</h2>
  <div class="flex items-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: 0
  },
  data() {
    return {
      steps: []
    }
  },
  watch: {
    steps: {
      handler() {
        this.steps.forEach((step, idx) => {
          step.setIndex(idx)
        })
      },
      deep: true
    },
    active() {

    }
  }
}
</script>

<style lang="scss" scoped></style>
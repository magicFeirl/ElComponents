<template>
  <div :class="status + ''" :style="{ 'flex-basis': isLast ? '0%' : '50%' }" class="relative step-container">
    <div
      class="step-header flex z-10 relative justify-center items-center w-25px h-25px rounded-full text-sm bg-white border-2 border-light-900">
      {{ index }}</div>
    <div class="step-bar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: -1,
      status: 'undo'
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this)
  },
  mounted() {
    const unwatch = this.$watch('index', () => {
      this.$watch('$parent.active', () => {
        console.log('ac');
        this.updateStatus()
      }, { immediate: true })

      Promise.resolve().then(() => {
        unwatch()
      })
    }, { immediate: true })
  },
  computed: {
    isLast() {
      return this.index === this.$parent.steps.length - 1
    }
  },
  methods: {
    updateStatus() {
      const active = this.$parent.active
      if (active > this.index) {
        this.status = 'done'
      } else {
        this.status = 'undo'
      }
    },
    setIndex(idx) {
      this.index = idx
    }
  }
}
</script>

<style scoped>
.step-bar {
  @apply absolute top-1/2 transform translate-y-1/2 left-0 w-full h-2px bg-gray-400
}

.step-bar, .step-container {
  @apply transition-all
}

.step-container {
  flex-basis: 50%;
}


.done .step-bar {
  @apply bg-green-400
}

.done .step-header {
  @apply border-green-400
}
</style>
<template>
  <div class="progress-bar flex w-full items-center">
    <div class="progress-bar__outer flex-grow">
      <div :style="progressBarStyle" class="progress-bar__inner">
      </div>
    </div>
    <div class="progress-bar__text"> {{ formatter && (progress) || `${progress}%` }}</div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: [Number, String],
      required: true,
      validator(val) {
        return val >= 0 && val <= 100
      }
    },
    formatter: {
      type: Function
    }
  },
  computed: {
    progressBarStyle() {
      return { width: `${this.progress}%` }
    }
  },

}
</script>

<style scoped>
.progress-bar__outer {
  @apply bg-light-800 rounded h-2px;
}

.progress-bar__inner {
  @apply bg-green-400 rounded h-full transition-all;
}
</style>
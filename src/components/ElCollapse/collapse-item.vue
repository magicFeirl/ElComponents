<template>
  <div class="collapse-item" @click="handleClick">
    <div class="title">{{ title }}</div>
    <div class="content" :class="hide ? 'hide' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['collapse'],
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: [Number, String],
    }
  },
  data() {
    return {
      hide: false,
    }
  },
  methods: {
    handleClick() {
      this.hide = !this.hide
      this.collapse.handleClick(this, this.index)
    }
  }
}
</script>

<style scoped>
.collapse-item {
  @apply pb-2 border border-light-800 mb-2
}

.title {
  @apply border-b border-light-900 cursor-pointer
}

.content {
  @apply transition transition-all max-h-9999px overflow-hidden
}

.content.hide {
  @apply h-0
}
</style>
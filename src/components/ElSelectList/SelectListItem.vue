<template>
  <div class="select-list-item" @click="handleClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'ElSelectListItem',
  props: {
    value: {
      required: true
    },
    label: {
      required: true
    }
  },
  data() {
    return {
      index: -1
    }
  },
  computed: {
    parent() {
      return this.$parent
    }
  },
  methods: {
    setIndex(idx) {
      this.index = idx
    },
    handleClick() {
      // this.$emit('click', this.value)
      this.parent.handleListItemClick(this.index)
    }
  },
  mounted() {
    this.parent.addChild(this)
  }
}
</script>

<style scoped>
.select-list-item {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: inherit;
  cursor: pointer;
  z-index: 1;
  position: relative;
}
</style>
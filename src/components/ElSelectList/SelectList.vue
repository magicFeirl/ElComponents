<template>
  <ul class="select-list">
    <slot></slot>
    <select-list-item ref="backgroundBarRef" class="background-bar" value="" label=""></select-list-item>
  </ul>
</template>

<script>
import SelectListItem from './SelectListItem.vue';

export default {
  components: {
    SelectListItem
  },
  props: {
    modelValue: {
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      children: [],
      selectedIndex: 0
    }
  },
  computed: {
    backgroundBarEl() {
      return this.$refs.backgroundBarRef.$el
    }
  },
  mounted() {
    this.handleListItemClick(0)
    // this.moveBackgroundBar(0)
  },
  methods: {
    addChild(child) {
      const index = this.children.length
      child.setIndex(index)

      this.children.push({
        instance: child,
        index
      })
    },
    moveBackgroundBar(index) {
      const el = this.children[index]?.instance.$el

      if (!el) {
        return;
      }

      const { offsetTop: top } = el
      const { width, height } = el.getBoundingClientRect()
      this.backgroundBarEl.style.top = top + 'px'
      this.backgroundBarEl.style.width = width + 'px'
      this.backgroundBarEl.style.height = height + 'px'
    },
    handleListItemClick(i) {
      const clickedChild = this.children.find(({ index }) => index === i)
      if (!clickedChild) {
        console.log('not found');
        return
      }

      const { instance } = clickedChild

      this.$emit('update:modelValue', instance.value)
      this.moveBackgroundBar(this.selectedIndex = i)
    }
  }
}
</script>

<style scoped>
ul.select-list {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.background-bar {
  position: absolute;
  height: 20px;
  background-color: aquamarine;
  transition: top 0.3s ease;
  z-index: 0;
}
</style>
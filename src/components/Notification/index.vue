<template>
  <div :style="{ 'top': `${top}px` }" class="notification--wrapper" v-show="visible">
    {{ message }}
  </div>
</template>

<script>
/**
 * This component is very similar to message, the common steps to create this comp is:
 * 
 * 1. save instances
 * 2. using render function to render .vue file to a DOM and then mount it to document.body
 * 3. handle close events. When close selected component, iterate the instaces array and calcuatue the reset components top offset 
 * 4. destory dom
 */
export default {
  props: {
    visible: false,
    message: {
      type: String,
      required: true
    },
    top: {
      type: [String, Number],
      default: 16
    }
  }
}
</script>

<style scoped>
.notification--wrapper {
  position: fixed;
  right: 40px;
  z-index: 1001;
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  padding: 1rem;
}
</style>
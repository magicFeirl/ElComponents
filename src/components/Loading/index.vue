<template>
  <Transition name="fade">
    <div class="loading-container" v-show="show">
      {{ text }}
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  text: {
    type: String,
    default: ''
  },
})

let show = ref(false)
Promise.resolve().then(() => {
  show.value = true
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loading-container {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
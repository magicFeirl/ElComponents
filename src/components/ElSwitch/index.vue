<template>
  <div>
    <input type="checkbox" class="w-0 h-0" />
    <span :class="modelValue ? 'checked' : ''" @click="handleChange"
      class="el-switch relative inline-block w-40px h-20px rounded-2xl bg-red-400">

    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleChange() {
      this.$emit('update:modelValue', !this.modelValue)
    }
  }
}
</script>

<style scoped>
.el-switch.checked {
  @apply bg-green-400;
}

.el-switch.checked::after {
  margin-left: calc(100% - 20px);
}

.el-switch::after {
  transition: margin 0.3s ease;
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 20px;
  border-radius: 100%;
  transform: scale(0.9);
  background-color: white;
  cursor: pointer;
}
</style>
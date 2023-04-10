<template>
  <div class="relative h-32px inline-block ">
    <slot></slot>
    <span class="px-1 translate-x-1/2 text-sm -translate-y-1/5 right-10px  transform text-white  absolute top-0 bg-red-400 rounded">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped></style>
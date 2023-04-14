<template>
  <span>
    {{ page }}
  </span>
</template>

<script>
export default {
  props: {
    page: {
      type: [Number, String],
      required: true
    }
  },
}
</script>

<style scoped></style>
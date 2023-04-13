<template>
  <div>
    <tempalte v-if="!error">
      <img v-if="!loading" :src="src">
      <div v-else>
        <slot name="placeholder"></slot>
      </div>
    </tempalte>
    <div v-else>
      <slot name="error"></slot>
    </div>
  </div>
</template>

<script>
// 实现
// 1.占位
// 2. fit
// 3. error 
// 4. lazy loading

export default {
  name: 'ElImage',
  props: {
    src: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      deafult: false
    }
  },
  data() {
    return {
      loading: true,
      error: false
    }
  },
  mounted() {
    this.loadImage()
  },
  methods: {
    loadImage() {
      const image = new Image()
      image.src = this.src
      this.loading = true
      image.onload = () => {
        this.error = false
        this.loading = false
      }

      image.onerror = () => {
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
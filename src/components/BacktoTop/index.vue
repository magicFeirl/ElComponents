<template>
  <div class="el-back-to-top" v-show="visiable" @click.stop="backToTop">
    <slot>Back to top</slot>
  </div>
</template>

<script>
export default {
  props: {
    visHeight: {
      type: Number,
      default: 200
    },
  },
  data() {
    return {
      el: null,
      visiable: false
    }
  },
  mounted() {
    this.el = document.documentElement
    this.init()
  },
  methods: {
    backToTop() {
      this.el.scrollTo(0, 0)
    },
    init() {
      document.addEventListener('scroll', (e) => {
        this.visiable = this.el.scrollTop >= this.visHeight
      })
    },
  }
}
</script>

<style scoped>
.el-back-to-top {
  @apply fixed right-40px bottom-40px w-50px h-50px;
}
</style>
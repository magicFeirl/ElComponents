<template>
  <h2>v-infinite-scroll(Simple ver)</h2>
  <div class="h-100px overflow-auto w-200px" v-infinite-scroll="loadData">
    <div class="h-15px mb-1 bg-light-900" v-for="item in infData">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infData: []
    }
  },
  methods: {
    loadData() {
      this.infData.push(...Array.from({ length: 10 }).map((_, idx) => idx))
    }
  }
}
</script>

<style lang="scss" scoped></style>
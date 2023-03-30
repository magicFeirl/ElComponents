<template>
  <div>
    <el-table border ref="table" :data="data">
      <el-table-column label="name" prop="name"></el-table-column>
      <el-table-column label="age" prop="age"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {name: 123, age: 123},
        {name: 123, age: 123},
        {name: 123, age: 123},
        {name: 123, age: 123},
      ]
    }
  },
  mounted() {
    console.log(this.$refs.table.$slots.default());
  }
}
</script>

<style lang="scss" scoped></style>
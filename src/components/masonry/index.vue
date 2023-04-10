<template>
  <div class="masonry">
    <div class="column" v-for="col in columns" :key="col.id">
      <div :style="{ 'height': item.height + 'px' }" class="item" v-for="item in col.data">
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
import data from './data'
export default {
  data() {
    const columnCount = 3, itemPerColumn = Math.ceil(data.length / columnCount)

    const columns = []

    for (let i = 0; i < columnCount; i++) {
      columns.push({
        id: i,
        data: data.slice(itemPerColumn * i, itemPerColumn * (i + 1))
      })
    }

    return { columns }
  },
}
</script>

<style scoped>
.masonry {
  display: flex;
  width: 100%;
  gap: 5px;
}

.masonry .column {
  flex: 1;
  flex-direction: column;
}

.column .item {
  margin-bottom: 5px;
  background-color: #ccc;
}
</style>
<template>
  <div>
    <pagination-item class="pagination-item" :class="currentPage === pageObj.page ? 'active' : ''"
      @click="handlePageChange(pageObj)" :page="pageObj.page" v-for="pageObj in pageList"
      :key="pageObj.page"></pagination-item>
  </div>
</template>

<script>
import paginationItem from './pagination-item.vue'

function range(begin, end) {
  const result = []
  while (begin < end) {
    result.push(begin)
    begin++
  }

  return result
}

function pageMapper(prefix) {
  return function (page) {
    let type = 'number'
    if (page === '...') {
      type = prefix + '-block'
    }

    return { type, page }
  }
}

export default {
  emits: ['page-change'],
  components: {
    paginationItem,
  },
  props: {
    pageSize: {
      type: Number,
      default: 20,
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pageList: [],
      // 当前页数前后至多能够有几个 pageItem
      // pageAlign = 2 -> 除开尾页和首页一共有 5 个 pageItem 可以选择
      pageAlign: 2
    }
  },
  methods: {
    calcPageList() {
      let prev, after

      if (this.currentPage <= this.pageAlign) {
        prev = range(1, this.currentPage)
      }

      if (this.currentPage + this.pageAlign >= this.totalPage) {
        after = range(this.currentPage + 1, this.totalPage + 1)
      }

      if (!prev) {
        prev = range(this.currentPage - this.pageAlign, this.currentPage)
        const prevPageCount = this.currentPage - this.pageAlign - 1

        if (prevPageCount === 1) {
          prev.unshift(1)
        } else if (prevPageCount > 1) {
          prev.unshift(1, '...')
        }
      }

      if (!after) {
        after = range(this.currentPage + 1, this.currentPage + 1 + this.pageAlign)
        const afterPageCount = this.totalPage - this.currentPage
        console.log(afterPageCount, this.currentPage, this.totalPage)
        if (afterPageCount === this.pageAlign + 1) {
          after.push(this.totalPage)
        } else {
          after.push('...', this.totalPage)
        }
      }

      prev = prev.map(pageMapper('prev'))
      after = after.map(pageMapper('after'))

      this.pageList = [...prev, { type: 'number', page: this.currentPage }, ...after]
    },
    handlePageChange({ page, type }) {
      if (page === this.currentPage) {
        return
      }

      if (type !== 'number') {
        const pageAlign = this.pageAlign * 2 + 1
        page = this.currentPage + (type === 'prev-block' ? -1 : 1) * pageAlign
        if (page < 1) {
          page = 1
        }

        if (page > this.totalPage) {
          page = this.totalPage
        }
      }

      this.$emit('page-change', page)
    }
  },
  watch: {
    currentPage: {
      handler() {
        this.calcPageList()
      },
      immediate: true
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    }
  }
}
</script>

<style scoped>
.pagination-item.active {
  color: red;
}

.pagination-item {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  border: 1px solid #ccc;
  user-select: none;
}

.pagination-item+.pagination-item {
  margin-left: 1rem;

}
</style>
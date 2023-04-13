<template>
  <div class="el-breadcrumb-item">
    <slot></slot>
    <span class="el-breadcrumb-item__separator">{{ root.separator }}</span>
  </div>
</template>

<script>
export default {
  name: 'el-breadcrumb-item',
  inject: ['root']
}
</script>

<style scoped>
.el-breadcrumb-item__separator,
.el-breadcrumb-item+.el-breadcrumb-item {
  margin-left: 0.5rem;
}

.el-breadcrumb-item:last-child .el-breadcrumb-item__separator {
  display: none;
}
</style>
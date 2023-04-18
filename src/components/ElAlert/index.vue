<template>
  <div v-if="visible" class="my_el-alert" :class="`el-alert-${type}`">
    <div class="el-alert__title">{{ title }}</div>
    <div v-if="description" class="el-alert__description"></div>
    <div v-if="closable" class="el-alert__close" @click="handleCloseClick">
      {{ closeText || 'x' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElAlert',
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success',
      validator(type) {
        return ['success', 'error', 'info', 'warning'].indexOf(type) > -1
      }
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleCloseClick() {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>

<style  scoped>
.my_el-alert {
  padding: 0.5rem 1rem;
  padding-right: 2rem;
  position: relative;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 0.5rem;
}

.el-alert__close {
  color: grey;
  float: right;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.el-alert-success {
  background-color: rgba(0, 128, 0, 0.295);
}

.el-alert-info {
  background-color: gainsboro;
}

.el-alert-error {
  background-color: red;
}

.el-alert-warning {
  background-color: orange;
}
</style>
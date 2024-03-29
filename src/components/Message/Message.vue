<template>
    <transition @before-leave="onClose" @after-leave="onDestroy" name="message-fade">
        <div v-show="visiable" :class="messageStyle" :style="{ top: `${top}px` }">
            <span>{{ message }}</span>
        </div>
    </transition>
</template>

<script setup>
import types from './types'

import { onMounted, ref, computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator(value) {
            return Object.values(types).includes(value)
        }
    },
    top: {
        type: Number,
        default: 20
    },
    message: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 3000
    },
    onDestroy: Function,
    onClose: Function
})

const visiable = ref(false)

const messageStyle = computed(() => ['message', props.type])

const close = () => {
    visiable.value = false
}

onMounted(() => {
    visiable.value = true
})

setTimeout(close, props.duration)
</script>

<style scoped>
.message {
    @apply fixed z-50 left-1/2 rounded px-4 py-2 transform -translate-x-1/2 min-w-3/10 transition-all
}

.message.info {
    color: #73767a;
    background: #f4f4f5;
}

.message.danger {
    color: #c45656;
    background: #fde2e2;
}

.message.success {
    color: #529b2e;
    background: #e1f3d8;
}

.message.warning {
    color: #b88230;
    background: #faecd8;
}

.message-fade-enter-from,
.message-fade-leave-to {
    @apply transform -translate-x-1/2 -translate-y-20px opacity-0
}
</style>
<template>
    <transition name="messagebox-fade" @after-leave="onDestroy">
        <div @click="setVisiable(false)" v-show="visiable"
            class="z-50 flex items-center justify-center fixed top-0 left-0 w-full h-full bg-dark-50/50">
            <div @click.stop class="transform -translate-y-1/2 p-2 rounded min-w-3/7 bg-white">
                <p class="text-sm text-gray-600 font-light"> {{ title }}</p>
                <p class="my-4 text-lg">
                    <content-view :type="type"></content-view>
                </p>
                <div class="w-full flex justify-end items-center">
                    <button @click="okBtnClicked" class="btn btn-primary"> {{ ok }}</button>
                    <button @click="cancelBtnClicked" v-if="cancel" class="ml-2 btn btn-danger"> {{ cancel }}</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'

const { onOK, onCancel, message } = defineProps({
    title: {
        type: String,
        default: '提示'
    },
    message: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        validator: (value) => {
            return ['confirm', 'prompt'].includes(value)
        }
    },
    ok: {
        type: String,
        default: 'OK'
    },
    cancel: {
        type: String,
        default: ''
    },
    onDestroy: Function,
    onOK: Function,
    onCancel: Function
})


const promptContent = ref('')

const ContentView = ({ type }) => {
    switch (type) {
        case (!type || 'confirm'):
            return h('p', null, message)
        case 'prompt':
            return h('input', {
                class: 'messagebox-input',
                onInput: (e) => promptContent.value = e.target.value
            })
    }
}

const visiable = ref(false);
const setVisiable = (vis) => {
    visiable.value = vis;
}

const okBtnClicked = () => {
    setVisiable(false);
    onOK(promptContent.value)
}

const cancelBtnClicked = () => {
    setVisiable(false)
    onCancel()
}

onMounted(() => {
    setVisiable(true);
})
</script>

<style scoped>
.btn {
    @apply outline-gray-100 border-none p-1 rounded bg-warm-gray-200
}

.btn-primary {
    @apply bg-sky-300
}

.messagebox-input {
    @apply border rounded border-light-900 outline-none w-full py-1 px-2 text-lg 
}

.messagebox-fade-enter-from,
.messagebox-fade-leave-to {
    @apply opacity-0
}

.messagebox-fade-enter-active,
.messagebox-fade-leave-active {
    @apply transition-opacity
}
</style>
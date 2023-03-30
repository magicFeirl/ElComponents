<template>
    <div class="pl-2">
        <h1 class="text-2xl mb-4">ElementPlus Message & MessageBox Component & Loading Components etc.</h1>
        <div>
            <h2 class="text-lg">MessageBox test</h2>
            <button @click="showMessage">message</button>
            <button @click="showMessageStatic">message static</button>
            <button @click="showMessagePrompt">showMessagePrompt</button>
            <button @click="showMessagePromptStatic">showMessagePromptStatic</button>
        </div>

        <div class="mt-4">
            <h2 class="text-lg">Message test</h2>
            <button @click="Message.info({ message: 'nihao' })">Info Message</button>
            <button @click="Message({ type: 'warning', message: 'nihao' })">Warning Message</button>
            <button @click="Message.danger({ message: 'nihao' })">Error Message</button>
            <button @click="Message({ type: 'success', message: 'nihao', duration: 5000 })">Success Message</button>
        </div>

        <div class="mt-4">
            <h2 class="text-lg">el-loading</h2>
            <button @click="showLoading">Show loading</button>
        </div>

        <div>
            <button class="relative">
                <div class="absolute left-0 top-0 w-full h-full bg-white border rounded-full"></div>
                helli
            </button>
        </div>

        <ElTableTest />

        <InfiniteScroll></InfiniteScroll>

        <VirtualList :listHeight="300" :rowHeight="50" :data="virtualListData"></VirtualList>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { MessageBox } from './components/MessageBox'
import Message from './components/Message'
import InfiniteScroll from './components/InfiniteScroll/index.vue'
import VirtualList from './components/VirtualList/index.vue'

import Loading from './components/Loading/index.js'

import ElTableTest from './components/ElTableTest/index.vue'

const showMessage = () => {
    MessageBox({
        title: '提示',
        message: 'hello world',
        ok: 'OK',
        cancel: 'Cancel',
        type: 'confirm'
    }).then(() => {
        console.log('normal message ok')
    }).catch(() => {
        console.log('normal message cancel')
    })
}


const showMessagePrompt = () => {
    MessageBox({
        title: '提示',
        ok: 'OK',
        cancel: 'Cancel',
        type: 'prompt'
    }).then((value) => {
        console.log('normal message ok:', value)
    }).catch(() => {
        console.log('normal message cancel')
    })
}

const showMessageStatic = () => {
    MessageBox.confirm({
        title: 'hello',
        ok: 'ok',
        message: 'how are you?'
    })
}

const showMessagePromptStatic = () => {
    MessageBox.prompt({
        title: 'hello',
        ok: 'Ok',
        cancel: 'Cancel',
    })
}

const showLoading = () => {
    const inst = Loading.show()
    setTimeout(() => {
        inst.close()
    }, 1000);
}

const virtualListData = ref([...Array.from({ length: 10000 }).map((_, idx) => idx)])
</script>

<style scoped>
button {
    @apply rounded mt-2 mr-2 px-2 py-1 border border-light-900 bg-light-600
}
</style>
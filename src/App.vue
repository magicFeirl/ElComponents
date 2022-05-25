<template>
    <div class="pl-2">
        <h1 class="text-2xl mb-4">ElementPlus Message & MessageBox Component</h1>
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
    </div>
</template>

<script setup>
import { MessageBox } from './components/MessageBox'
import Message from './components/Message'

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
</script>

<style scoped>
button {
    @apply rounded mt-2 mr-2 px-2 py-1 border border-light-900 bg-light-600
}
</style>
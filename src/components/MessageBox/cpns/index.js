import { createApp } from 'vue'

import MessageBoxCpn from './MessageBox.vue'

const fields = ['confirm', 'prompt']

export default function MessageBox(options) {
    return new Promise((resolve, reject) => {
        const app = createApp(MessageBoxCpn, {
            ...options,
            onDestroy: () => {
                app.unmount()
            },
            onOK: (value) => {
                resolve(value)
            },
            onCancel: () => {
                reject()
            }
        })

        const frg = document.createDocumentFragment()

        app.mount(frg)

        document.body.appendChild(frg)
    })
}

fields.forEach(field => {
    MessageBox[field] = (options) => {
        options.type = field
        return MessageBox(options)
    }
})
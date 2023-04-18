import LoadingVue from './index.vue'
import { createApp } from 'vue'

let boydScroll;
const defaultOptions = {
  text: 'loading...'
}

export default {
  show(options = {}) {
    this.instance = createApp(LoadingVue, {
      show: false,
      onClose: this.close,
      ...defaultOptions,
      ...options
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    this.container = container
    this.instance.mount(container)


    return this
  },
  close() {
    this.container.remove()
  }
}
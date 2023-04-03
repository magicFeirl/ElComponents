import Main from './index.vue'

import { h, render } from 'vue'

const instances = []
let seed = 0


export default function Notification(options = {}) {
  const id = 'Notification_' + seed++

  const onClose = () => {
    close(id)
    options?.onClose()
  }

  const top = instances.map(inst => inst.el.offsetHeight).reduce((a, b) => {
    return a + b + 16
  }, 0) + 16

  const vnode = h(Main, {
    onClose: onClose,
    visible: true,
    message: options.message,
    top
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  render(vnode, container)

  instances.push(vnode)
  vnode.id = id

  return () => close(id)
}

function close(id) {

  const instanceIndex = instances.findIndex(ins => ins.id === id)
  console.log('close', id, instanceIndex);

  if (instanceIndex < 0) {
    return;
  }

  const instance = instances[instanceIndex]
  const removedHeight = instance?.el.offsetHeight || 16


  for (let i = instanceIndex + 1, j = instances.length; i < j; i++) {
    const item = instances[i]
    const itemTop = parseInt(item?.el.style['top'], 10)

    item.el.style = `top: ${itemTop - removedHeight - 16}px`
  }

  instances.splice(instanceIndex, 1)
  instance?.el.remove()
}

Notification.close = close
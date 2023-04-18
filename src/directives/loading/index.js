import LoadingVue from '../../components/Loading/index.vue'
import { h, render } from 'vue'

const directives = {
  mounted(el, bindings) {
    const loading = bindings.value
    if (!loading) {
      return;
    }

    const vnode = h(LoadingVue)
    const loadingEl = document.createElement('div')
    render(vnode, loadingEl)
    el.appendChild(loadingEl)
    el.classList.add('el-loading-wrapper')
  }
}

export default function install(vue) {
  vue.directive('loading', directives)
}
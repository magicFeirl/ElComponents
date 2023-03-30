const InfiniteScroll = {
  mounted(el, bindings, context) {
    const load = bindings.value
    load()

    el.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight } = el
      const { height } = el.getBoundingClientRect()
      if(scrollTop + height >= scrollHeight -20) {
        load()
      }
    })
  },
}

export default function install(vue) {
  vue.directive('infinite-scroll', InfiniteScroll)
}
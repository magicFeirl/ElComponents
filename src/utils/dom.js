export function getStyle(dom, styleName) {
  return dom.style[styleName] || computed ? computed[styleName] : null
}

export function isScroll(dom, vertical = true) {
  const overflow = getStyle(dom, vertical ? 'overflow-y' : 'overflow-x')
  return overflow && /auto|scroll|overlay/.test(overflow)
}

export function getScrollContainer(dom) {
  const topList = [window, document.body, document.documentElement]
  while (dom) {
    if (topList.includes(dom)) {
      return window
    }

    if (isScroll(dom)) {
      return dom
    }

    dom = dom.parentElement
  }
}
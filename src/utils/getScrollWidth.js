let scrollWidth;

export default function () {
  if (scrollWidth != undefined) {
    return scrollWidth
  }

  let el = document.createElement('div')
  el.style.height = '100px'
  el.style.position = 'absolute'
  el.style.visibility = false
  el.style.overflow = 'scroll'

  document.body.appendChild(el)
  scrollWidth = el.offsetWidth - el.clientWidth
  el.parentNode.removeChild(el)

  return scrollWidth
}
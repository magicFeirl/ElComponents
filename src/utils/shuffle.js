export function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const temp = arr[i], idx = Math.ceil(Math.random() * (i - 1))
    arr[i] = arr[idx]
    arr[idx] = temp
  }
}
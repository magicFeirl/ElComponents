const cnt = 100
const data = []

for (let i = 0; i < cnt; i++) {
  data.push({
    id: i,
    height: 100 + Math.floor(Math.random() * 200)
  })
}

export default data
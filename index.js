const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World! ')
})
const users = [
  { id: 1, name: 'tanjin', email: 'tanjinhossain@gmail.com' },
  { id: 2, name: 'Mahabub', email: 'Mahabubhossain@gmail.com' },
  { id: 3, name: 'Noman', email: 'Nomanhossain@gmail.com' },
  { id: 4, name: 'AlifKhan', email: 'AlifKhan@gmail.com' },
  { id: 5, name: 'Hridoy', email: 'Hridoyhossain@gmail.com' },
  { id: 6, name: 'sraboni', email: 'sraboniAkter@gmail.com' },
  { id: 7, name: 'mahmudurRahmanArba', email: 'mahmudurRahmanArba@gmail.com' },
  { id: 8, name: 'rakibShekh', email: 'rakibShekh@gmail.com' },
  { id: 9, name: 'sujon', email: 'sujonhossain@gmail.com' },
  { id: 10, name: 'sajjad', email: 'sajjadhossain@gmail.com' }
];
app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id)
  res.send(user)
})
app.post('/user', (req,res)=>{
  console.log(req.body)
  const user = req.body;
  user.id = users.length + 1;
  users.push(user)
  res.send(user)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
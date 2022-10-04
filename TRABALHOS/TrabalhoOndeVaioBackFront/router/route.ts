import express from 'express';
const itensRouter = express.Router();



itensRouter.post('/itens', (req, res) => {
  res.send('Cria novo item')
})

itensRouter.get('/user', (req, res) => {
  res.send('Lê todos os itens')
})

itensRouter.get('/user/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Lê o item ${id}`)
})

itensRouter.put('/user/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Atualiza o item ${id}`)
})

itensRouter.delete('/user/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Apaga o item ${id}`)
})

export default itensRouter
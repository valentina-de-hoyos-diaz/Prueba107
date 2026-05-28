const clienteController = require('./controllers/cliente.controller')

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/clientes', clienteController.listar)

app.get('/clientes/:correo', clienteController.consultarCorreo) 

app.post('/clientes', clienteController.registrar) 

app.put('/clientes/:correo', clienteController.actualizar) 

app.delete('/clientes/:correo', clienteController.eliminar) 

app.listen(9800)
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {CONNECTION_STRING, SERVER_PORT} = process.env
const ctrl = require('./controller/ctrl')

app.use(express.json())
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`⇌  pulse ${SERVER_PORT}`)
    })
}).catch(err => console.log(err))

// ENDPOINTS
app.get("/api/inventory", ctrl.getProducts)
app.get("/api/product/:id", ctrl.getProduct)
app.post("/api/product", ctrl.addProduct)
app.put("/api/product/:id", ctrl.updateProduct)
app.delete("/api/product/:id", ctrl.deleteProduct)
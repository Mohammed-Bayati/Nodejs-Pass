const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000

app.get('/orders', function (req, res) {

    const orders = fs.readFileSync("./orders.txt", "utf8").split(",")
    const splitOrders = []

    orders.forEach(order => splitOrders.push(order.split("\r\n").filter(item => item != "")))


    res.send(splitOrders)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


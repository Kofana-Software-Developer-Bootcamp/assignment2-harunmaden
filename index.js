const express = require("express")
const { requestCalculator, xmlToJson } = require("./helper")

const app = express();

const http = require('http')


const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == '/') {
        res.write("Index Sayfasi")
    }
    else if (url == '/add') {
        
        requestCalculator("Add", 7, 4).then((response) => {
            console.log(xmlToJson(response, "Add"))
        })
    }
    else if (url == '/divide') {
        
        requestCalculator("divide", 7, 4).then((response) => {
            console.log(xmlToJson(response, "divide"))
        })
    }
    else if (url == '/multiply') {
        
        requestCalculator("multiply", 7, 4).then((response) => {
            console.log(xmlToJson(response, "multiply"))
        })
    }
    else if (url == '/subtract') {
        
        requestCalculator("subtract", 7, 4).then((response) => {
            console.log(xmlToJson(response, "subtract"))
        })
    }
    res.end()


})

const port = 3000

server.listen(port, () => {
    console.log('Sunucu port' + port + 'de başlatıldı.')
})
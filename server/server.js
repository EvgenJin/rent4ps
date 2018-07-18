const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');
const fetch = require('node-fetch');
const config = require('./config.json')
// rethink
const r = require('rethinkdb')
const db = Object.assign(config.rethinkdb, {  
  db: 'shop'
});
//web server
const ws = Object.assign(config.ws);
const server = http.createServer(function(request, response){});
const io = socketIO(server);
// для апи
const fetch_ct = 'application/x-www-form-urlencoded;charset=UTF-8'
const api_url = 'https://payarea24.com/api/v1/partner/'
const id_seller = 3260
const key = 'd8023d41b52d2c25aa88781dc1e8e1cf63131dffaacfcd45387e5d8ac82eecfd'
// эмитер
const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
//
let array_product = []
let c = []
// -----------все ид товаров и массив объектов (не полный)----------
getProductsId = () => {
  const id_seller = 3260
  const id_group = 269
  const key = 'd8023d41b52d2c25aa88781dc1e8e1cf63131dffaacfcd45387e5d8ac82eecfd'
  const array_id = []
  const array_product = []
  // получить идешники всех
  fetch(api_url+'getGroup/',{method: 'POST',headers: {'Content-Type': fetch_ct},
    body: 'id=' + id_seller + '&key='+ key + '&groupId=' + id_group 
    // + '&inStock=' + '1'
  })
    .then(res => res.json())
    .then(res => {
      res.group.forEach(element => {
        element.productId = 'a'+element.productId
        array_id.push(element.productId)
        array_product.push(element)
      })
    })
    // .then(res => io.sockets.emit('products',array_product))
    .then(res => myEmitter.emit('api',array_product))
    // .then(res => console.log(array_product))
}

/*
1.Когда клиент подключается - с апи возвращаюстя товары и массив передается евентом api
2.При подключенной базе слушается евент api и запрашивается таблица с группами, 
  после добавления реквизита группы уходит через сокет на клиент
*/

// io.on('connection', (client) => {
  getProductsId()
// })

r.connect(db)
  .then(conn => {
    myEmitter.on('api',array_product => {
    let c = []
    r.table('products').run(conn)
    .then(cursor => {
      cursor.toArray((err, data) => {
        data.forEach(item => {
          c[item.productId] = item
        })
        // console.log(array_product)
        array_product.forEach(item => {
          if(c[item.productId] == null){
            c[item.productId] = {id:'',name:'',productId:''}
          }
          item.group=c[item.productId].name
          // console.log(c[item.productId].name)
        })
        console.log(array_product)
        // myEmitter.emit('exit',array_product)
      })
     })
    })
   })


getProductInfo =() => {
  fetch(api_url+'getProduct/',{method: 'POST',headers: {'Content-Type': fetch_ct},
    body: 'id=' + id_seller + '&key='+ key 
    + '&productId=' + item.productId
  })
  .then(res => res.json())
}

// ----------------------------------------------------------------
// start web server
server.listen(ws.http_port,ws.http_ip,() => console.log('ready on '+ws.http_ip+':'+ws.http_port))
// when client is connected
io.on('connection', function (socket) {
    console.log('A client is connected!')
})
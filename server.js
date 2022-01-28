const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



const router = express.Router()
const api = require('./api')
app.use('/product', router);
api(router);


app.use(express.static('dist/index.html'));
app.listen(port, () => {
  console.log(`E-Commerce app listening on port ${port}`)
})

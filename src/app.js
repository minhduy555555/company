const path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
const app = express()
const PORT =  process.env.PORT || 3000;
const router = require('./router/index') 

app.use(express.urlencoded())
app.use(express.json())

app.use(cookieParser())

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs'})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, '/views'));


try{
  mongoose.connect('mongodb+srv://duyminh1052002:duy12344321@cluster0.7jm2j.mongodb.net/Companys')
  console.log('conectSuss')
}
catch(error){
  console.log('error')
}

router(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
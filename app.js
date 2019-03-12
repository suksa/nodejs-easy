var express = require('express')
var app = express()
var bodyParser = require('body-parser') //post 요청 처리

app.listen(3000,function(){
    console.log('start! express server 3000port')
})
app.use(express.static('public')) //기본 public 폴더를 불러옴 static
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //데이터 형변환
app.set('view engin','ejs') //뷰엔진 으로 ejs 사용

// url routing
app.get('/',function(req,res){
    //res.send('hi friend <p>p tag</p>')
    res.sendFile(__dirname+"/public/main.html")
})

app.get('/main',function(req,res){
    //res.send('hi friend <p>p tag</p>')
    res.sendFile(__dirname+"/public/main.html")
})
//post 처리
app.post('/email_post',function(req,res){
    //get : req.param('email)
    //post 처리
    //res.send(`<h1>welcome + ${req.body.email}</h1>`)
    res.render('email.ejs',{'email':req.body.email})
})
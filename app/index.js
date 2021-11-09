const { prototype } = require('events');
const express = require('express');
const path = require('path');
const app = express(); //Instancia del Servidor

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) =>{
   res.sendFile(path.join(__dirname,'./views/index.html'));
});

app.get('/calculadora',(req,res) =>{
    res.sendFile(path.join(__dirname,'./views/calculadora.html'));
 });

 app.get('/contactanos',(req,res) =>{
   res.sendFile(path.join(__dirname,'./views/acercade.html'));
 });

 app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,'./views/404.html'));
 });

app.listen(app.get('port'), () =>{      //Arrow Function
    console.log(`listen on http://localhost:${app.get('port')}`);
});
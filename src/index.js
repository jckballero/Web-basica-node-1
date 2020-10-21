const express = require('express');
const app = express(); //ejecutando el modulo (esto devuelve un objeto, y lo guardamos en app)
const path = require('path');

//configuraciones
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //de esta manera usamos los archivos .ejs en sus originales .html
app.set('view engine', 'ejs') //usando el motor de plantillas ejs

//middlewares


// routes
app.use(require('./routes/index'));

//archivos staticos
app.use(express.static(path.join(__dirname, 'public')));

//Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('El servidor se esta ejecutando en el puerto', app.get('port'));
});
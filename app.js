require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


//Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// Para servir contenido estático

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home',{
    nombre:'Samuel Cuadros',
    titulo:'Curso de Node'
  });
  
});

app.get('/views/partials/generic', (req, res) => {
  res.render('generic',{
    nombre:'Samuel Cuadros',
    titulo:'Curso de Node'
  });
  
});
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Samuel Cuadros',
    titulo:'Curso de Node'

  });
  
});

app.get('*', (req, res) => {
  res.sendFile('404 | Page no found');
  
});

app.listen(port, () =>{
  console.log(`Escuchando puerto  en http://localhost:${port}`)
});
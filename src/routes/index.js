const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Web basica en Node' });
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', { title: 'Esta es la pagina de contacto' });
});

router.get('/proyectos', (req, res) => {
    res.render('proyectos.html', { title: 'Esta es la pagina de proyectos' });
});

module.exports = router;
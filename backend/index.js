const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo');
    res.status(200);
});

app.use('/front', express.static(path.join(__dirname, '../front')));

app.listen(port, () =>{
    console.log(`Servidor corriendo en puerto ${port}`);
});



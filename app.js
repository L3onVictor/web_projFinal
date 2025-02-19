const express = require('express');
const app = express();
const port = 55555;


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

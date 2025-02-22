import express from 'express';
const app = express();
const porta = 55555;


app.use(express.static('public'));


app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`);
});

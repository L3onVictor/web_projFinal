import express from 'express';
import cors from 'cors';
import authRoutes from './routes/registro.js';
import loginRoutes from './routes/login.js';

const app = express();
const porta = 55555;


app.use(express.json());
app.use(cors()); 

// Definir rotas
app.use('/api', authRoutes);
app.use('/api', loginRoutes);

app.use(express.static('public'));

// Iniciar servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`);
});

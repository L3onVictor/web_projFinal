import express from 'express';
import cors from 'cors';
import authRoutes from './routes/registro.js';
import loginRoutes from './routes/login.js';
import agendamentoRoutes from './routes/agendamento.js';

const app = express();
const porta = 55555;

app.use(express.json());
app.use(cors()); 

// rotas
app.use('/api', authRoutes);
app.use('/api', loginRoutes);
app.use('/api/agendamento', agendamentoRoutes);

app.use(express.static('public'));


app.listen(porta, () => {
    console.log(`Servidor rodando em localhost:${porta}`);
});

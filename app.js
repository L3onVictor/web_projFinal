import express from 'express';
import authRoutes from './routes/auth.js';

const app = express();
const porta = 55555;

// Middleware para processar JSON
app.use(express.json());

// 🔹 Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Definir rotas
app.use('/auth', authRoutes);

// Iniciar servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

import express from 'express';
import { adicionarUsuario } from '../database/userRegister.js';

const router = express.Router();


router.post('/registro', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
    }

    const resultado = await adicionarUsuario(nome, email, senha);
    res.status(resultado.sucesso ? 201 : 500).json(resultado);
});

export default router;

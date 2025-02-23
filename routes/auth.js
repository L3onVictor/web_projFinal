import express from 'express';
import bcrypt from 'bcrypt'; // Para hash de senha
import { db } from '../database/db.js';

const router = express.Router();

// 🔹 Rota para REGISTRAR usuário
router.post('/registro', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
    }

    try {
        const hashSenha = await bcrypt.hash(senha, 10); // Hash seguro
        await db.run("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, hashSenha]);
        res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
    } catch (erro) {
        console.error("Erro no registro:", erro);
        res.status(500).json({ mensagem: "Erro ao registrar usuário!" });
    }
});

export default router;

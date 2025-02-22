import { Router } from "express";
import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = "chave-secreta"; // Troque por uma chave mais segura

// Rota para registrar um usuário
router.post("/register", async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
        // Verifica se o usuário já existe
        const usuarioExistente = await db.get("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (usuarioExistente) {
            return res.status(400).json({ error: "Email já cadastrado!" });
        }

        // Hash da senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // Insere o novo usuário
        await db.run("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senhaHash]);

        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao registrar usuário." });
    }
});

// Rota para login
router.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
        // Busca o usuário no banco
        const usuario = await db.get("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (!usuario) {
            return res.status(400).json({ error: "Usuário não encontrado!" });
        }

        // Compara a senha digitada com o hash armazenado
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ error: "Senha incorreta!" });
        }

        // Gera um token JWT
        const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, { expiresIn: "1h" });

        res.json({ message: "Login realizado com sucesso!", token });
    } catch (error) {
        res.status(500).json({ error: "Erro ao fazer login." });
    }
});

export default router;

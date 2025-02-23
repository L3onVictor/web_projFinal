import db from "../database/database.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    try {
        const { nome, senha } = req.body;

        const sql = "SELECT * FROM usuarios WHERE nome = ?";
        const usuario = await db.get(sql, [nome]);

        if (!usuario) {
            return res.status(401).json({ sucesso: false, mensagem: "Usuário não encontrado" });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ sucesso: false, mensagem: "Senha incorreta" });
        }

        return res.json({ sucesso: true, mensagem: "Login bem-sucedido!" });
    } catch (erro) {
        console.error("Erro no login:", erro);
        res.status(500).json({ sucesso: false, mensagem: "Erro ao tentar fazer login" });
    }
};

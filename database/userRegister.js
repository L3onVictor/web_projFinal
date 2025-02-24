import { db } from "./db.js";
import bcrypt from "bcrypt";

async function adicionarUsuario(nome, email, senha) {
    try {
        
        const hashSenha = await bcrypt.hash(senha, 10);


        await db.run(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, hashSenha]
        );

        return { sucesso: true, mensagem: "Usuário registrado com sucesso!" };
    } catch (erro) {
        console.error("Erro ao registrar usuário:", erro);
        return { sucesso: false, mensagem: "Erro ao registrar usuário!" };
    }
}

export async function buscarUsuario(nome) {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM usuarios WHERE nome = ?", [nome], (erro, usuario) => {
            if (erro) reject(erro);
            else resolve(usuario);
        });
    });
}

export { adicionarUsuario };

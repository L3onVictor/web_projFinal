import { db } from "./db.js";
import bcrypt from "bcrypt";

async function inserirUsuarios() {
    const senhaHash = await bcrypt.hash("123456", 10); // Hash da senha padrão

    try {
        await db.run(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            ["Admin", "admin@email.com", senhaHash]
        );
        console.log("Usuário inicial inserido com sucesso!");
    } catch (erro) {
        console.error("Erro ao inserir usuário inicial:", erro);
    }
}

inserirUsuarios();

import { db } from "./db.js";

async function criarTabelas() {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )
    `);
    console.log("Tabela 'usuarios' criada com sucesso!");
}

criarTabelas();

// db.exec('drop table usuarios')
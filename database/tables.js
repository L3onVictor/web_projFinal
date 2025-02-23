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

    await db.exec(`
        CREATE TABLE IF NOT EXISTS agendamentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            servico TEXT NOT NULL,
            nome TEXT NOT NULL,
            data TEXT NOT NULL,
            hora TEXT NOT NULL,
            telefone int not null,
            observacao TEXT
        )
    `); console.log("Tabela 'agendamentos' criada com sucesso!");
}

criarTabelas();

// db.exec('drop table agendamentos')
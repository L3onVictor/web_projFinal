import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function conectarBanco() {
    return open({
        filename: "./database/usuarios.db",
        driver: sqlite3.Database
    });
}

const db = await conectarBanco();
export default db;

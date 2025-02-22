import sqlite3 from "sqlite3"
import { open } from "sqlite"

const dpPomise = open({
    filename: './database/usuarios.db',
    driver: sqlite3.Database
})

export const db = await dpPomise;
import sqlite3 from "sqlite3"
import { open } from "sqlite"

const dbPomise = open({
    filename: './database/usuarios.db',
    driver: sqlite3.Database
})

export const db = await dbPomise;
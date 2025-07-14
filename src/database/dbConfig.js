import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs';
import path from 'path';
import createTables from './criar_tabelas.js';

async function initDb() {
    const dbPath = './database/banco.db';

    try {
        const dirExists = fs.existsSync(path.dirname(dbPath));
        if (!dirExists) {
            fs.mkdirSync(path.dirname(dbPath), { recursive: true });
        }

        const dbExists = fs.existsSync(dbPath);
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        if (!dbExists) {
            console.log('📊 Banco criado com sucesso');
            await createTables(db);
        }

        console.log('✅ Conexão com o banco estabelecida');
        return db;
    } catch (error) {
        console.error('❌ Erro ao iniciar o banco:', error.message);
        throw error;
    }
}

export default initDb;
import sqlite3 from 'sqlite3';

async function createTables(db) {
    try {
        await db.exec(/*sql*/`

            CREATE TABLE IF NOT EXISTS personagem (
                id_personagem INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_personagem VARCHAR(45) NOT NULL,
                clase_personagem INT NOT NULL,
                vida_personagem INT NOT NULL,
                level_personagem INT,
                inventario INT,
                personagem_criado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS clases (
                id_clase INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_clase VARCHAR(45) NOT NULL,
                inventario_padrao INT
            );

            INSERT INTO clases (nome_clase, inventario_padrao)
            VALUES ('Mago', 1), 
                   ('Guerreiro', 2), 
                   ('Arqueiro', 3), 
                   ('Elfo', 4);

        `);

        console.log("✅ Tabelas criadas");
    } catch (error) {
        console.error("❌ Erro ao criar tabelas:", error.message);
        throw error; 
    }
};

export default createTables;
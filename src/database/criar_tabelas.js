import sqlite3 from 'sqlite3';

async function createTables(db) {
    try {
        await db.exec(/*sql*/`

            CREATE TABLE IF NOT EXISTS personagem (
                id_personagem INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_personagem VARCHAR(45) NOT NULL UNIQUE,
                level_personagem FLOAT,
                vida_personagem INT NOT NULL,
                clase_personagem INT NOT NULL,
                inventario_pak INT UNIQUE,
                ouro_personagem INT,
                status_personagem INT DEFAULT 1 NOT NULL,
                time_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS clases (
                id_clase INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_clase VARCHAR(45) NOT NULL UNIQUE,
                inventario_padrao INT,
                status_clase INT DEFAULT 1 NOT NULL
            );

            CREATE TABLE IF NOT EXISTS inventario_padrao (
                id_invent INTEGER PRIMARY KEY AUTOINCREMENT,
                arma_primaria INT,
                magia INT,
                item INT
            );

            CREATE TABLE IF NOT EXISTS inventario_pak (
                id_invent INTEGER PRIMARY KEY AUTOINCREMENT,
                id_personagem INT UNIQUE,
                arma_primaria INT,
                magia INT,
                item INT
            );

            CREATE TABLE IF NOT EXISTS armas (
                id_arma INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_arma VARCHAR(45) NOT NULL UNIQUE,
                poder_arma INT
            );

            CREATE TABLE IF NOT EXISTS magias (
                id_magia INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_magia VARCHAR(45) NOT NULL UNIQUE,
                tipo_magia INT NOT NULL,
                poder_magia INT
            );

            CREATE TABLE IF NOT EXISTS item (
                id_item INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_item VARCHAR(45) NOT NULL UNIQUE,
                descricao_item VARCHAR(100)
            );

            CREATE TABLE IF NOT EXISTS tipo_magia (
                id_tipo_magia INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_tipo_magia VARCHAR(45) NOT NULL UNIQUE
            );

            INSERT INTO clases (nome_clase, inventario_padrao, status_clase)
            VALUES 
                ('Mago', 1, 1), 
                ('Guerreiro', 2, 1), 
                ('Arqueiro', 3, 1), 
                ('Elfo', 4, 1);

            INSERT INTO armas (nome_arma, poder_arma) 
            VALUES ('Espada de Aço', 13),
                   ('Maça De Aço', 11),
                   ('Machado de Ferro', 15),
                   ('Espada de Ferro', 12),
                   ('Adaga de Ferro', 7);
            
            INSERT INTO magias (nome_magia, tipo_magia, poder_magia) 
            VALUES ('Bola de Fogo', 1, 10),
                   ('Bola de Gelo', 2, 10),
                   ('Cura Divina', 3, 10),
                   ('Chicote de Raio', 4, 10),
                   ('Pequena Geada', 2, 10);
            
            INSERT INTO tipo_magia (nome_tipo_magia)
            VALUES ('Fogo'),
                   ('Gelo'),
                   ('Cura'),
                   ('Raio');
            
            INSERT INTO item (nome_item, descricao_item)
            VALUES ('Tocha', 'Clareia seu caminho'),
                   ('Corda', 'Pode usar para esclar'),
                   ('Garrafa', 'Pode aguardar liquidos');
                
        `);

        console.log("✅ Tabelas criadas");
    } catch (error) {
        console.error("❌ Erro ao criar tabelas:", error.message);
        throw error;
    }
};

export default createTables;
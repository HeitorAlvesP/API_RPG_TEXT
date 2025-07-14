import app from './src/app.js';
import initDb from './src/database/dbConfig.js';


async function startServer() {
    try {
        const db = await initDb();
    
        app.get('/', (req, res) => {
            res.json({ message: "API RPG Online!" });
        });

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Rodando em http://localhost:${port}`);
            console.log(`Servidor rodando!`)
        });

    } catch (error) {
        console.error('Falha ao iniciar:', error);
        process.exit(1);
    }
}

startServer();

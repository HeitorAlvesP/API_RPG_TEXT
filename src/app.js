import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: "Bem vindo ao RPG! 🏰⚔️" });
});

app.use((req, res, next) => {
    const erro = new Error('🛑 Não encontrado nenhuma rota');
        erro.status = 404;
        next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

export default app;
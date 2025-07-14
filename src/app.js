import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Servidor RPG de Texto rodando! ⚔️" });
});

export default app;
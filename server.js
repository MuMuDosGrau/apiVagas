import express from 'express';
import sequelize from './dataBase.js';
import vagasRoutes from './routes/vagaRoutes.js';

const app = express();

// Middleware para habilitar JSON
app.use(express.json());

// Rotas da API
app.use('/api', vagasRoutes);

// Sincronizar com o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('API rodando na porta 3000');
    });
}).catch(error => {
    console.error('Erro ao sincronizar com o banco de dados:', error);
});

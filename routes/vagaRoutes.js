// routes/vagaRoutes.js
import express from 'express';
import { listarVagas, criarVaga, atualizarVaga, deletarVaga, filtrarVagas} from '../controllers/vagaController.js';

const router = express.Router();

// Rotas da API para vagas
router.get('/vagas', listarVagas);
router.post('/vagas', criarVaga);
router.get('/filtrarVagas', filtrarVagas);
router.put('/vagas/:id', atualizarVaga);
router.delete('/vagas/:id', deletarVaga);

export default router;

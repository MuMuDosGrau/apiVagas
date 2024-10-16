// controllers/vagaController.js
import Vaga from '../models/vaga.js';

// Listar todas as vagas
export const listarVagas = async (req, res) => {
    try {
        const vagas = await Vaga.findAll();
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as vagas' });
    }
};

// Criar uma nova vaga
export const criarVaga = async (req, res) => {
    try {
        const vaga = await Vaga.create(req.body);
        res.status(201).json(vaga);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar a vaga', detalhes: error.message });
    }
};

export const filtrarVagas = async (req, res) => {
    const { cargo, cidade } = req.query; // Obtém os filtros da query string

    try {
        const where = {}; // Cria um objeto para os filtros

        if (cargo) {
            where.cargo = cargo; // Adiciona filtro por cargo se fornecido
        }

        if (cidade) {
            where.cidade = cidade; // Adiciona filtro por cidade se fornecido
        }

        const vagas = await Vaga.findAll({ where }); // Busca as vagas com os filtros
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as vagas' });
    }
};

// Atualizar uma vaga
export const atualizarVaga = async (req, res) => {
    try {
        const [updated] = await Vaga.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const vagaAtualizada = await Vaga.findByPk(req.params.id);
            res.status(200).json(vagaAtualizada);
        } else {
            res.status(404).json({ error: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar a vaga', detalhes: error.message });
    }
};

// Deletar uma vaga
export const deletarVaga = async (req, res) => {
    try {
        const deleted = await Vaga.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send(); // No Content
        } else {
            res.status(404).json({ error: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar a vaga' });
    }
};

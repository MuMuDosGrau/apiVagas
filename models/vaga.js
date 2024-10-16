import { DataTypes } from 'sequelize';
import sequelize from '../dataBase.js';

const Vaga = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: DataTypes.DECIMAL,
        allowNull: true, // Campo opcional
    },
}, {
    tableName: 'Vagas', // Nome da tabela no banco de dados
});
export default Vaga; // Corrigido para exportar como default

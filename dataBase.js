import { Sequelize } from 'sequelize';

// Crie a instância do Sequelize usando a URL de conexão do CockroachDB
const sequelize = new Sequelize("postgresql://mumu:KmsEaloZKlalpmVIh_-xiw@teste1709-1697.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

// Teste a conexão
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao CockroachDB");
    } catch (error) {
        console.error("Não foi possível conectar ao banco de dados:", error);
    }
}

testConnection();

export default sequelize;

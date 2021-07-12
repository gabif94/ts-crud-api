import { Sequelize } from 'sequelize';

const db = new Sequelize('tsapi', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db
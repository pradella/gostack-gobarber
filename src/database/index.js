// conexão com banco de dados e carregar os models
import Sequelize from 'sequelize';

import User from '../app/models/User';
import databaseConfig from '../config/database';
import Meetup from '../app/models/Meetup';
import Registration from '../app/models/Registration';
import File from '../app/models/File';

const models = [User, Meetup, Registration, File];

class Database {
    constructor() {
        this.init();
        this.associate();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }

    associate() {
        models.forEach((model) => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        });
    }
}

export default new Database();

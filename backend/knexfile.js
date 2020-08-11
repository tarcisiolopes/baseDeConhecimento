// const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: {
		database: 'knowledge',
		user: 'postgres',
		password: 'senha'
	},
	pool: {
		min: 2,
		max: 50
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};


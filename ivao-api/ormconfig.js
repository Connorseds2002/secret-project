import 'dotenv/config'

module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
};
import type { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
import type { SeederOptions } from 'typeorm-extension';

import { Env } from '~/src/env';

import { MainSeeder } from './seeds/MainSeeder';

export const baseOptions: DataSourceOptions & SeederOptions = {
	synchronize: true,
	type: Env.NODE_ENV === 'test' ? 'better-sqlite3' : 'postgres',
	database: Env.DATABASE_NAME,
	migrations: ['./database/migrations/*.{js,ts}'],
	entities: ['./src/entities/*.{js,ts}'],
	seeds: [MainSeeder],
};

const options =
	Env.NODE_ENV === 'test'
		? baseOptions
		: {
				...baseOptions,
				host: Env.DATABASE_HOST,
				port: Env.DATABASE_PORT,
				username: Env.DATABASE_USER,
				password: Env.DATABASE_PASSWORD,
		  };

export const AppDataSource = new DataSource(options);

export const createConnection = async (): Promise<DataSource> =>
	await AppDataSource.initialize();

/* eslint-disable no-undef */
import request from 'supertest';
import type { DataSource } from 'typeorm';

import { createConnection } from '~/database';
import { app } from '~/src/app';
import { Env } from '~/src/env';

let connection: DataSource;
let server = app.listen(Env.PORT);

describe('Create Category Controller', () => {
	beforeAll(async () => {
		connection = await createConnection();
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.destroy();
		server.close();
	});

	it('should be able to create a new user ', async () => {
		const { body, status } = await request(server).post('/users').send({
			name: 'Jhollyfer Rodrigues',
			email: 'jhollyfer@mail.com',
		});

		expect(body).toHaveProperty('id');
		expect(body).toHaveProperty('name', 'Jhollyfer Rodrigues');
		expect(body).toHaveProperty('email', 'jhollyfer@mail.com');
		expect(status).toBe(201);
	});

	it('should not be able to create a new user with e-mail exists', async () => {
		const { status } = await request(server).post('/users').send({
			name: 'Jhollyfer Rodrigues',
			email: 'jhollyfer@mail.com',
		});

		expect(status).toBe(400);
	});
});

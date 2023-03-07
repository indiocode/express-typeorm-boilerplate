import type { Repository } from 'typeorm';

import { AppDataSource } from '~/database';
import { User } from '~/src/entities/User';

import type { ICreateUserDTO } from './dtos/ICreateUserDTO';
import type { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = AppDataSource.getRepository(User);
	}

	async create(data: ICreateUserDTO): Promise<User> {
		const user = this.repository.create(data);

		return await this.repository.save(user);
	}

	async findByEmail(email: string): Promise<User> {
		return (await this.repository.findOneBy({ email })) as User;
	}
}

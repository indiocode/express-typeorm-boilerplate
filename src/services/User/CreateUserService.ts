/* eslint-disable no-unused-vars */
import { inject, injectable } from 'tsyringe';

import type { User } from '~/src/entities/User';
import { AppError } from '~/src/errors/AppError';
import type { ICreateUserDTO } from '~/src/repositories/User/dtos/ICreateUserDTO';
import type { IUserRepository } from '~/src/repositories/User/IUserRepository';

@injectable()
export class CreateUserService {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async execute(data: ICreateUserDTO): Promise<User> {
		const carAlreadyExists = await this.userRepository.findByEmail(data.email);

		if (carAlreadyExists) throw new AppError('User already exists!');

		return await this.userRepository.create(data);
	}
}

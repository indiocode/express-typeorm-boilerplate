/* eslint-disable no-unused-vars */

import type { User } from '~/src/entities/User';

import type { ICreateUserDTO } from './dtos/ICreateUserDTO';

export interface IUserRepository {
	create(data: ICreateUserDTO): Promise<User>;
	findByEmail(email: string): Promise<User>;
}

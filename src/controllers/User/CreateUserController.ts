import type { Request, Response } from 'express';
import { container } from 'tsyringe';

import type { ICreateUserDTO } from '~/src/repositories/User/dtos/ICreateUserDTO';
import { CreateUserService } from '~/src/services/User/CreateUserService';

export class CreateUserController {
	static async handle(request: Request, response: Response): Promise<Response> {
		const data = request.body as ICreateUserDTO;

		const createUserService = container.resolve(CreateUserService);

		const rental = await createUserService.execute(data);

		return response.status(201).json(rental);
	}
}

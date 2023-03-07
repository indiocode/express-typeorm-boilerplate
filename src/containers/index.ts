import { container } from 'tsyringe';

import type { IUserRepository } from '../repositories/User/IUserRepository';
import { UserRepository } from '../repositories/User/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

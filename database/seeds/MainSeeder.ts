/* eslint-disable no-unused-vars */
import type { DataSource } from 'typeorm';
import type { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager,
	): Promise<void> {
		// await runSeeder(dataSource, UserAdminSeeder);
	}
}

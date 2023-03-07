import { createConnection } from '~/database';

import { app } from './app';
import { Env } from './env';

createConnection();

export const server = app.listen(Env.PORT, () =>
	console.log(`listening on port ${Env.PORT}`),
);

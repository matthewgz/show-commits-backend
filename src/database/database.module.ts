import { Module, Global } from '@nestjs/common';

import { database } from './__mocks__/database';

@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE',
      useValue: database,
    },
  ],
  exports: ['DATABASE'],
})
export class DatabaseModule {}

import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE',
      useValue: {
        repositories: [
          { name: 'show-commits-backend' },
          { name: 'show-commits-frontend' },
        ],
        user: 'matthewgz',
      },
    },
  ],
  exports: ['DATABASE'],
})
export class DatabaseModule {}

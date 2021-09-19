import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { RepositoriesController } from './controllers/repositories.controller';
import { RepositoriesService } from './services/repositories.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        headers: {
          headers: {
            Authorization: `Bearer ${configService.get('GITHUB_TOKEN')}`,
            'User-Agent': 'show-commits-backend',
          },
        },
      }),
    }),
  ],
  controllers: [RepositoriesController],
  providers: [RepositoriesService],
})
export class RepositoriesModule {}

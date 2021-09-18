import { Module } from '@nestjs/common';

import { RepositoriesController } from './controllers/repositories.controller';
import { RepositoriesService } from './services/repositories.service';

@Module({
  controllers: [RepositoriesController],
  providers: [RepositoriesService],
})
export class RepositoriesModule {}

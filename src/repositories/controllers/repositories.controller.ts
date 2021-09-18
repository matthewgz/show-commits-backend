import { Controller, Get, Param } from '@nestjs/common';

import { RepositoriesService } from 'repositories/services/repositories.service';
import { Repository } from 'repositories/entities/repositories.entity';

@Controller('repos')
export class RepositoriesController {
  constructor(private repositoriesService: RepositoriesService) {}

  @Get()
  getRepositories() {
    return this.repositoriesService.getAll();
  }

  @Get(':repositoryName')
  getRepository(@Param('repositoryName') repositoryName: string): Repository {
    return this.repositoriesService.findOne(repositoryName);
  }

  @Get(':repositoryName/commits')
  getCommits(@Param('repositoryName') repositoryName: string) {
    return this.repositoriesService.getCommits(repositoryName);
  }
}

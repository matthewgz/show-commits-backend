import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { RepositoriesService } from 'repositories/services/repositories.service';
import { Repository } from 'repositories/entities/repositories.entity';
import { FilterProductsDto } from 'repositories/dtos/repositories.dtos';

@ApiTags('repositories')
@Controller('repositories')
export class RepositoriesController {
  constructor(private repositoriesService: RepositoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List all the repositories' })
  getRepositories() {
    return this.repositoriesService.getAll();
  }

  @Get(':repositoryName')
  @ApiOperation({ summary: 'Find a repository by the name' })
  getRepository(@Param('repositoryName') repositoryName: string): Repository {
    return this.repositoriesService.findOne(repositoryName);
  }

  @Get(':repositoryName/commits')
  @ApiOperation({ summary: 'Get all commits from a repository' })
  getCommits(
    @Param('repositoryName') repositoryName: string,
    @Query() params: FilterProductsDto,
  ) {
    return this.repositoriesService.getCommits(repositoryName, params);
  }
}

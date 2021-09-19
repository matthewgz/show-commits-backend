import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import { Repository, Commit } from 'repositories/entities/repositories.entity';
import { FilterProductsDto } from 'repositories/dtos/repositories.dtos';
import { DATABASE } from 'database/entities/database.entity';
import config from 'config';

@Injectable()
export class RepositoriesService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('DATABASE') private database: DATABASE,
    private httpService: HttpService,
  ) {}

  getAll() {
    return this.database.repositories;
  }

  findOne(name: string): Repository {
    const repository = this.database.repositories.find(
      (repo) => repo.name === name,
    );

    if (!repository) {
      throw new NotFoundException(`Repository #${name} not found`);
    }

    return repository;
  }

  async getCommits(
    name: string,
    params?: FilterProductsDto,
  ): Promise<Commit[]> {
    const config: any = {};
    if (params) {
      const { limit, page } = params;
      config.per_page = limit;
      config.page = page;
    }

    const { api } = this.configService.github;
    const url = `${api}repos/${this.database.user}/${name}/commits`;
    const { data } = await this.httpService
      .get(url, { params: config })
      .toPromise();

    // Here we are transforming the GITHUB API data format to our format
    const response: Commit[] = data.map((commit) => ({
      author: {
        name: commit.commit.author.name,
        email: commit.commit.author.email,
        avatarUrl: commit.author.avatar_url,
      },
      htmlUrl: commit.html_url,
      message: commit.commit.message,
      date: commit.committer.date,
      sha: commit.sha,
    }));

    return response;
  }
}

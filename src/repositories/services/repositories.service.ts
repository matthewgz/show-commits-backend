import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import { Repository, Commit } from 'repositories/entities/repositories.entity';
import config from 'config';

@Injectable()
export class RepositoriesService {
  private repositories: Repository[] = [
    { name: 'show-commits-backend' },
    { name: 'show-commits-frontend' },
  ];

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private httpService: HttpService,
  ) {}

  getAll() {
    return this.repositories;
  }

  findOne(name: string): Repository {
    const repository = this.repositories.find((repo) => repo.name === name);

    if (!repository) {
      throw new NotFoundException(`Repository #${name} not found`);
    }

    return repository;
  }

  async getCommits(name: string): Promise<Commit[]> {
    const { api, user } = this.configService.github;
    const url = `${api}repos/${user}/${name}/commits`;
    const { data } = await this.httpService.get(url).toPromise();

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

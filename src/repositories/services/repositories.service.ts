import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'repositories/entities/repositories.entity';

@Injectable()
export class RepositoriesService {
  private repositories: Repository[] = [
    { name: 'show-commits-backend' },
    { name: 'show-commits-frontend' },
  ];

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

  getCommits(name: string) {
    return `Commits from ${name}`;
  }
}

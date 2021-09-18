import { Test, TestingModule } from '@nestjs/testing';

import { RepositoriesModule } from 'repositories/repositories.module';
import { repositoriesService } from 'repositories/__mocks__/repositories.service';
import { RepositoriesService } from 'repositories/services/repositories.service';
import { RepositoriesController } from './repositories.controller';

describe('RepositoriesController', () => {
  let controller: RepositoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RepositoriesModule],
    })
      .overrideProvider(RepositoriesService)
      .useValue(repositoriesService)
      .compile();

    controller = module.get<RepositoriesController>(RepositoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all the respositories', async () => {
    jest.spyOn(controller, 'getRepositories');

    const result = await controller.getRepositories();

    expect(result).toHaveLength(2);
    expect(controller.getRepositories).toHaveBeenCalledTimes(1);
  });

  it('should find a repository', async () => {
    jest.spyOn(controller, 'getRepository');

    const repoName = 'show-commits-frontend';

    const result = await controller.getRepository(repoName);

    expect(result).toMatchObject({ name: repoName });
    expect(controller.getRepository).toHaveBeenCalledTimes(1);
  });

  it('should return all the commits', async () => {
    jest.spyOn(controller, 'getCommits');

    const repoName = 'show-commits-frontend';

    const result = await controller.getCommits(repoName);

    expect(result).toHaveLength(1);
    expect(controller.getCommits).toHaveBeenCalledTimes(1);
  });
});

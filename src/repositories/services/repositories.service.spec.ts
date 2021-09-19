import { Test, TestingModule } from '@nestjs/testing';

import { RepositoriesModule } from 'repositories/repositories.module';
import { repositoriesService } from 'repositories/__mocks__/repositories.service';
import { RepositoriesService } from './repositories.service';

describe('RepositoriesService', () => {
  let service: RepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RepositoriesModule],
    })
      .overrideProvider(RepositoriesService)
      .useValue(repositoriesService)
      .compile();

    service = module.get<RepositoriesService>(RepositoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all the respositories', async () => {
    jest.spyOn(service, 'getAll');

    const result = await service.getAll();

    expect(result).toHaveLength(2);
    expect(service.getAll).toHaveBeenCalledTimes(1);
  });

  it('should find a repository', async () => {
    jest.spyOn(service, 'findOne');

    const repoName = 'show-commits-frontend';

    const result = await service.findOne(repoName);

    expect(result).toMatchObject({ name: repoName });
    expect(service.findOne).toHaveBeenCalledTimes(1);
  });

  it('should return all the commits', async () => {
    jest.spyOn(service, 'getCommits');

    const repoName = 'show-commits-frontend';

    const result = await service.getCommits(repoName);

    expect(result).toHaveLength(1);
    expect(service.getCommits).toHaveBeenCalledTimes(1);
  });
});

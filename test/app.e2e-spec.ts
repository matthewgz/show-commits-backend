import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from 'app.module';
import { database } from 'database/__mocks__/database';
import { repositoriesService } from 'repositories/__mocks__/repositories.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/repositories (GET)', () => {
    return request(app.getHttpServer())
      .get('/repositories')
      .expect(200)
      .expect(database.repositories);
  });

  it('/repositories/:repositoryName (GET)', () => {
    const repoName = 'show-commits-frontend';
    return request(app.getHttpServer())
      .get(`/repositories/${repoName}`)
      .expect(200)
      .expect(repositoriesService.findOne(repoName));
  });

  it('/repositories/:repositoryName/commits (GET)', () => {
    const repoName = 'show-commits-frontend';
    return request(app.getHttpServer())
      .get(`/repositories/${repoName}/commits`)
      .expect(200);
  });
});

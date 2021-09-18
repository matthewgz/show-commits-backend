import { database } from 'database/__mocks__/database';

export const repositoriesService = {
  getAll: () => database.repositories,
  findOne: (name) => database.repositories.find((repo) => repo.name === name),
  getCommits: (name) => [
    {
      author: {
        name: name,
        email: 'matthewgz241@gmail.com',
        avatarUrl: 'https://avatars.githubusercontent.com/u/21980013?v=4',
      },
      htmlUrl:
        'https://github.com/matthewgz/show-commits-backend/commit/45a140324cde9a5b358c87f62303a4333fb0a414',
      message: '[Feature] - Integrating GitHub api in the project',
      sha: '45a140324cde9a5b358c87f62303a4333fb0a414',
    },
  ],
};

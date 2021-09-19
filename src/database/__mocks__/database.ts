import { DATABASE } from 'database/entities/database.entity';

export const database: DATABASE = {
  repositories: [
    { name: 'show-commits-backend', label: 'Backend' },
    { name: 'show-commits-frontend', label: 'Frontend' },
  ],
  user: 'matthewgz',
};

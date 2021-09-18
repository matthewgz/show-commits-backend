import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  github: {
    api: process.env.GITHUB_API,
    token: process.env.GITHUB_TOKEN,
    user: process.env.GITHUB_USER,
  },
}));

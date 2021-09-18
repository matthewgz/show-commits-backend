import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  github: {
    api: process.env.GITHUB_API,
    token: process.env.GITHUB_TOKEN,
  },
}));

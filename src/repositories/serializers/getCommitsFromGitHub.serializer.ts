import { CommitGitHub } from 'repositories/entities/github.entity';

export const getCommitsFromGitHub = (data: CommitGitHub[]) => {
  return data.map((commit) => ({
    author: {
      name: commit.author.login,
      email: commit.commit.author.email,
      avatarUrl: commit.author.avatar_url,
      htmlUrl: commit.author.html_url,
    },
    htmlUrl: commit.html_url,
    message: commit.commit.message,
    date: commit.commit.author.date,
    sha: commit.sha,
  }));
};

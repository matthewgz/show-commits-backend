export class CommitGitHub {
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  commit: {
    message: string;
    author: {
      email: string;
      date: string;
    };
  };
  sha: string;
  html_url: string;
}

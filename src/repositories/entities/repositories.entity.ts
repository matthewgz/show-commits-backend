export class Repository {
  name: string;
}

class Author {
  name: string;
  email: string;
  avatarUrl: string;
}

export class Commit {
  author: Author;
  htmlUrl: string;
  message: string;
  date: string;
  sha: string;
}

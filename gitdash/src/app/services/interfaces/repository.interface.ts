export interface Repository {
    id: number;
    name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    };
    html_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string;
    language: string;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
  }

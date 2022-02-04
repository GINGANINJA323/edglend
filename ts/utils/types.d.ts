export interface Colours {
  theme: string;
  backgroundCol: string;
  foregroundCol: string;
  color: string;
  inverseBgCol: string;
  inverseCol: string;
  hoverCol: string;
};

export interface GitEvent {
  username: string;
  userLink: string;
  type: string;
  repoName: string;
  repoLink: string;
  time: string;
  count: number;
};

export interface RawGitEvent {
  type: string;
  actor: {
    display_login: string;
  };
  repo: {
    name: string;
  };
  created_at: number;
  payload: {
    size?: number;
  }
}

export interface Options {
  [key: string]: () => void
}
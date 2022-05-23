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
  ref?: string;
  refType?: string;
  pusherType?: string;
  prTitle?: string;
  prAction?: string;
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
    ref?: string;
    ref_type?: string;
    pusher_type?: string;
    pull_request?: {
      title?: string;
      action?: string;
    }
  }
}

export interface Options {
  [key: string]: () => void
}
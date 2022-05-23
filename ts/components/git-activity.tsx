import React, { useEffect, useState } from 'react';
import { Button, Link } from './controls';
import { ContentArea, ErrorMessage } from './elements';
import { formatDate, buildCommitString, matchEvents } from '../utils/utils';
import type { GitEvent, RawGitEvent } from '../utils/types';

const GitActivity = (): JSX.Element => {
  const [ gitData, setGitData ] = useState<GitEvent[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  const githubLink = 'https://github.com/';

  const getGitActivity = async(pageNumber: number, pageSize?: number = 5): Promise<void> => {
    const response = await fetch('https://api.github.com/users/GINGANINJA323/events');

    if (!response || response.status !== 200) {
      setError('Failed to get GitHub activity. Try again later!');
      setLoading(false);
      return;
    }

    const gitActivity = await response.json();

    const formattedGitActivity: GitEvent[] = gitActivity.map((event: RawGitEvent) => ({
      username: event.actor.display_login,
      userLink: `${githubLink}${event.actor.display_login}`,
      type: event.type,
      repoName: event.repo.name,
      repoLink: `${githubLink}${event.repo.name}`,
      time: formatDate(event.created_at),
      count: event.payload.size || 1, // Some events don't have a size
      ref: event.payload.ref,
      refType: event.payload.ref_type,
      pusherType: event.payload.pusher_type,
      prTitle: event.type === 'PullRequestEvent' ? event.payload.pull_request?.title : '',
      prAction: event.type === 'PullRequestEvent' ? event.payload.action : '',
    }));

    const groupedGitActivity: GitEvent[] = formattedGitActivity.reduce((acc: GitEvent[] | [], event: GitEvent) => {
      if (acc.length === 0) {
        return [event];
      }

      const exists = acc.findIndex(e => matchEvents(e, event));

      if (exists !== -1) {
        acc[exists].count = acc[exists].count + event.count;
        return acc;
      }

      return [...acc, event];
    }, []);

    setTotalPages(Math.ceil(groupedGitActivity.length / pageSize));
    const start = pageNumber * pageSize - pageSize;
    const end = start + pageSize > groupedGitActivity.length ? groupedGitActivity.length : start + pageSize;

    setGitData(groupedGitActivity.slice(start, end));
    setLoading(false);
  }

  const getPage = (pageNumber: number): void => {
    getGitActivity(pageNumber, 10);
  }

  useEffect(() => {
    getGitActivity(10);
  }, []);

  return (
    <>
      <h2>My Recent <Link rel="noopener noreferrer" target="_blank" href={`${githubLink}GINGANINJA323`}>GitHub</Link> Activity:</h2>
      {
        loading ? <p>Loading GitHub activity...</p> : null
      }
      {
        error ? <ErrorMessage>{error}</ErrorMessage> : null
      }
      {
        gitData ? gitData.map((act, i) => (
          <>
            <p key={i}>{buildCommitString(act)}</p>
          </>
        )) : null
      }
      {
        !error ?
          (
            <>
              <Button onClick={() => getPage(page + 1)} disabled={page === 1}>
                Back
              </Button>
              <p>
                Page {page} of {totalPages}
              </p>
              <Button onClick={() => getPage(page + 1)} disabled={page === totalPages}>
                Forward
              </Button>
            </>
          ) : null
      }
    </>
  );
}

export default GitActivity;
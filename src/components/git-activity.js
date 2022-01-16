import React, { useEffect, useState } from 'react';
import { Link } from './controls';
import { ContentArea, ErrorMessage } from './elements';
import { formatDate, buildCommitString } from '../utils';

const GitActivity = (props) => {

  const [ gitData, setGitData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  const eventMap = {
    'PushEvent': 'pushed'
  };

  const githubLink = 'https://github.com/';

  const getGitActivity = async() => {
    const response = await fetch('https://api.github.com/users/GINGANINJA323/events');

    if (!response || response.status !== 200) {
      setError('Failed to get GitHub activity. Try again later!');
      setLoading(false);
      return;
    }

    const gitActivity = await response.json();

    const formattedGitActivity = gitActivity.map(event => ({
      username: event.actor.display_login,
      userLink: `${githubLink}${event.actor.display_login}`,
      action: eventMap[event.type],
      repoName: event.repo.name,
      repoLink: `${githubLink}${event.repo.name}`,
      time: formatDate(event.created_at),
      count: 1
    }));

    const groupedGitActivity = formattedGitActivity.reduce((acc, event) => {
      const exists = acc.findIndex(e => e.repoName === event.repoName && e.username === event.username && e.time === event.time);

      if (exists !== -1) {
        acc[exists].count++;
        return acc;
      }

      return [...acc, event];
    }, [formattedGitActivity[0]]);

    setGitData(groupedGitActivity.slice(0, 5));
    setLoading(false);
  }

  useEffect(() => getGitActivity(), []);

  return (
    <>
      <h2>My Recent <Link href={`${githubLink}GINGANINJA323`}>GitHub</Link> Activity:</h2>
      {
        loading ? <p>Loading Git data...</p> : null
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
    </>
  );
}

export default GitActivity;
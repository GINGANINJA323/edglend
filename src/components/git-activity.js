import React, { useEffect, useState } from 'react';
import { Link } from './controls';
import { ContentArea, ErrorMessage } from './elements';
import { formatDate, buildCommitString, matchEvents } from '../utils';

const GitActivity = (props) => {

  const [ gitData, setGitData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  const eventMap = {
    'PushEvent': 'pushed',
    'CreateEvent': 'created'
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
      count: event.payload.size || 1 // Some events don't have a size
    }));

    const groupedGitActivity = formattedGitActivity.reduce((acc, event) => {
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

    setGitData(groupedGitActivity.slice(0, 5));
    setLoading(false);
  }

  useEffect(() => getGitActivity(), []);

  return (
    <>
      <h2>My Recent <Link href={`${githubLink}GINGANINJA323`}>GitHub</Link> Activity:</h2>
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
    </>
  );
}

export default GitActivity;
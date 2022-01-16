import React, { useEffect, useState } from 'react';
import { Link } from './controls';
import { ContentArea } from './elements';
import { formatDate } from '../utils';

const GitActivity = (props) => {

  const [ gitData, setGitData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const eventMap = {
    'PushEvent': 'pushed'
  };

  const githubLink = 'https://github.com/';

  const getGitActivity = async() => {
    const response = await fetch('https://api.github.com/users/GINGANINJA323/events');

    if (!response || response.status !== 200) {
      console.log('Error fetching Git Activity: ', response);
      return;
    }

    const gitActivity = await response.json();

    const formattedGitActivity = gitActivity.map(event => ({
      username: event.actor.display_login,
      userLink: `${githubLink}${event.actor.display_login}`,
      action: eventMap[event.type],
      repoName: event.repo.name,
      repoLink: `${githubLink}${event.repo.name}`,
      time: event.created_at
    })).slice(0, 5);

    setGitData(formattedGitActivity);
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
        gitData ? gitData.map(act => (
          <>
            <p><Link href={act.userLink}>{act.username}</Link> {act.action} a new commit to <Link href={act.repoLink}>{`${act.repoName}`}</Link> on {formatDate(act.time)}.</p>
          </>
        )) : null
      }
    </>
  );
}

export default GitActivity;
import React, { useEffect, useState } from 'react';
import { Link } from './controls';
import { ContentArea } from './elements';

const GitActivity = (props) => {

  const [ gitData, setGitData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const eventMap = {
    'PushEvent': 'pushed'
  };

  const getGitActivity = async() => {
    const response = await fetch('https://api.github.com/users/GINGANINJA323/events');

    if (!response || response.status !== 200) {
      console.log('Error fetching Git Activity: ', response);
      return;
    }

    const gitActivity = await response.json();

    const formattedGitActivity = gitActivity.map(event => ({
      username: event.actor.display_login,
      userLink: event.actor.url,
      action: eventMap[event.type],
      repoName: event.repo.name,
      repoLink: event.repo.url
    })).slice(0, 5);

    setGitData(formattedGitActivity);
    setLoading(false);
  }

  useEffect(() => getGitActivity(), []);

  return (
    <>
      <h2>My Recent <Link href={'https://github.com/GINGANINJA323'}>GitHub</Link> Activity:</h2>
      {
        loading ? <p>Loading Git data...</p> : null
      }
      {
        gitData ? gitData.map(act => (
          <>
            <p><Link href={act.userLink}>{act.username}</Link> {act.action} a new commit to <Link href={act.repoLink}>{`${act.repoName}`}</Link></p>
          </>
        )) : null
      }
    </>
  );
}

export default GitActivity;
import React, { useEffect, useState } from 'react';
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

    console.log(formattedGitActivity);
    setGitData(formattedGitActivity);
    setLoading(false);
  }

  useEffect(() => getGitActivity(), []);

  return (
    <>
      <h2>My Recent GitHub Activity:</h2>
      {
        loading ? <p>Loading Git data...</p> : null
      }
      {
        gitData ? gitData.map(act => (
          <>
            <p>{`${act.username} ${act.action} a new commit to ${act.repoName}.`}</p>
          </>
        )) : null
      }
    </>
  );
}

export default GitActivity;
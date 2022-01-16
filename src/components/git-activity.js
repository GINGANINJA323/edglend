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
      time: formatDate(event.created_at),
      count: 1
    }));

    const groupedGitActivity = formattedGitActivity.reduce((acc, event, index) => {
      if (acc.length === 0) {
        return [event]; // Populate initial acc if required.
      }

      const exists = acc.findIndex(e => e.repoName === event.repoName && e.username === event.username && e.time === event.time);

      if (exists !== -1) {
        const newAcc = acc;
        newAcc[exists].count = newAcc[exists].count + 1;
        return newAcc;
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
        loading ? <p>Loading Git data...</p> : null
      }
      {
        gitData ? gitData.map((act, i) => (
          <>
            <p key={i}><Link href={act.userLink}>{act.username}</Link> {act.action} {act.count} {act.count > 1 ? 'new commits' : 'a new commit'} to <Link href={act.repoLink}>{`${act.repoName}`}</Link> on {act.time}.</p>
          </>
        )) : null
      }
    </>
  );
}

export default GitActivity;
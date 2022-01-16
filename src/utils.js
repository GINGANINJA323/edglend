import React from 'react';
import { Link } from './components/controls';

export const formatDate = (date) => {
  const formattedDate = new Date(date);

  return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
}

export const buildCommitString = (event) => {
  if (event.type === 'PushEvent') {
    return (
      <><Link href={event.userLink}>{event.username}</Link> pushed {event.count} {event.count > 1 ? 'new commits' : 'a new commit'} to <Link href={event.repoLink}>{`${event.repoName}`}</Link> on {event.time}.</>
    );
  }

  if (event.type === 'CreateEvent') {
    return (
      <><Link href={event.userLink}>{event.username}</Link> created a new repository, <Link>{event.repoLink}</Link>, on {event.time}.</>
    );
  }
}

export const matchEvents = (fEvent, sEvent) => {
  return fEvent.repoName === sEvent.repoName &&
    fEvent.username === sEvent.username &&
    fEvent.time === sEvent.time &&
    fEvent.type === sEvent.type;
}
import React from 'react';
import { Link } from './components/controls';

export const formatDate = (date) => {
  const formattedDate = new Date(date);

  return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
}

export const buildCommitString = (act) => {
  if (act.type === 'PushEvent') {
    return (
      <><Link href={act.userLink}>{act.username}</Link> pushed {act.count} {act.count > 1 ? 'new commits' : 'a new commit'} to <Link href={act.repoLink}>{`${act.repoName}`}</Link> on {act.time}.</>
    );
  }

  if (act.type === 'CreateEvent') {
    return (
      <><Link href={act.userLink}>{act.username}</Link> created a new repository, <Link>{act.repoLink}</Link>, on {act.time}.</>
    );
  }
}

export const matchEvents = (fEvent, sEvent) => {
  return fEvent.repoName === sEvent.repoName &&
    fEvent.username === sEvent.username &&
    fEvent.time === sEvent.time &&
    fEvent.type === sEvent.type;
}
import React from 'react';
import { Link } from '../components/controls';
import type { GitEvent } from './types';

export const formatDate = (date: number): string => {
  const formattedDate = new Date(date);

  return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
}

export const buildCommitString = (event: GitEvent): JSX.Element | null => {
  if (event.type === 'PushEvent') {
    return (
      <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> pushed {event.count} {event.count > 1 ? 'new commits' : 'a new commit'} to <Link rel="noopener noreferrer" target="_blank" href={event.repoLink}>{`${event.repoName}`}</Link> on {event.time}.</>
    );
  }

  if (event.type === 'CreateEvent') {
    return (
      <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> created a new repository, <Link href={event.repoLink} rel="noopener noreferrer" target="_blank">{event.repoLink}</Link>, on {event.time}.</>
    );
  }

  if (event.type === 'DeleteEvent') {
    return (
      <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> deleted a `${event.refType}, ${event.ref},` <Link href={event.repoLink} rel="noopener noreferrer" target="_blank">{event.repoLink}</Link>, on {event.time}.</>
    );
  }

  else {
    return null;
  }
}

export const matchEvents = (fEvent: GitEvent, sEvent: GitEvent): boolean => {
  return fEvent.repoName === sEvent.repoName &&
    fEvent.username === sEvent.username &&
    fEvent.time === sEvent.time &&
    fEvent.type === sEvent.type;
}
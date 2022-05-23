import React from 'react';
import { Link } from '../components/controls';
import type { GitEvent } from './types';

export const formatDate = (date: number): string => {
  const formattedDate = new Date(date);

  return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
}

export const buildCommitString = (event: GitEvent): JSX.Element | null => {
  switch (event.type) {
    case 'PushEvent':
      return (
        <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> pushed {event.count > 1 ? `${event.count} new commits` : 'a new commit'} to <Link rel="noopener noreferrer" target="_blank" href={event.repoLink}>{`${event.repoName}`}</Link> on {event.time}.</>
      );
    case 'CreateEvent':
      return (
        <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> created a new repository, <Link href={event.repoLink} rel="noopener noreferrer" target="_blank">{event.repoLink}</Link>, on {event.time}.</>
      );
    case 'DeleteEvent':
      return (
        <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> deleted {event.refType} '{event.ref}' on <Link href={event.repoLink} rel="noopener noreferrer" target="_blank">{event.repoName}</Link>, on {event.time}.</>
      );
    case 'PullRequestEvent':
      return (
        <><Link rel="noopener noreferrer" target="_blank" href={event.userLink}>{event.username}</Link> {event.prAction} pull request {event.prTitle} on <Link href={event.repoLink} rel="noopener noreferrer" target="_blank">{event.repoName}</Link>, on {event.time}.</>
      );
    default:
      return null;
  }
}

export const matchEvents = (fEvent: GitEvent, sEvent: GitEvent): boolean => {
  return fEvent.repoName === sEvent.repoName &&
    fEvent.username === sEvent.username &&
    fEvent.time === sEvent.time &&
    fEvent.type === sEvent.type;
}
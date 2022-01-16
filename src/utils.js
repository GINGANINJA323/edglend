import React from 'react';
import { Link } from './components/controls';

export const formatDate = (date) => {
  const formattedDate = new Date(date);

  return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
}

export const buildCommitString = (act) => {
  return (
    <><Link href={act.userLink}>{act.username}</Link> {act.action} {act.count} {act.count > 1 ? 'new commits' : 'a new commit'} to <Link href={act.repoLink}>{`${act.repoName}`}</Link> on {act.time}.</>
  );
}
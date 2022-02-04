import React from 'react';
import { ContentArea } from './elements';
import { Button } from './controls';
import styled from 'styled-components';
import type { Options } from '../utils/types';

const OptContentArea = styled(ContentArea)`
  display: flex;
`;

interface Props {
  options: Options;
  children: JSX.Element | JSX.Element[]
}

const OptBar = (props: Props): JSX.Element => {
  const { options, children } = props;

  return (
    <OptContentArea>
      {
        Object.keys(options).map((o: string) => (
          <Button onClick={options[o]}>{o}</Button>
        ))
      }
      {children}
    </OptContentArea>
  );
}

export default OptBar;
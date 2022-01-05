import React from 'react';
import { ContentArea } from './elements';
import { Button } from './controls';
import styled from 'styled-components';

const OptContentArea = styled(ContentArea)`
  display: flex;
`;

const OptBar = (props) => {
  const { options, children } = props;

  return (
    <OptContentArea>
      {
        Object.keys(options).map(o => (
          <Button onClick={options[o]}>{o}</Button>
        ))
      }
      {children}
    </OptContentArea>
  );
}

export default OptBar;
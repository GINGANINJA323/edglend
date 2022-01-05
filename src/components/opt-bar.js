import React from 'react';
import { ContentArea } from './elements';
import { Button } from './controls';

const OptBar = (props) => {
  const { options } = props;

  return (
    <ContentArea>
      {
        Object.keys(options).map(o => (
          <Button onClick={options[o]}>{o}</Button>
        ))
      }
    </ContentArea>
  );
}

export default OptBar;
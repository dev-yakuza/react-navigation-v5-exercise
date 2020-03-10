import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const TabFirst = () => {
  return (
    <Container
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Label>This is First Tab</Label>
    </Container>
  );
};

export default TabFirst;

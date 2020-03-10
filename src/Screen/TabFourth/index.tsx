import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const TabFourth = () => {
  return (
    <Container>
      <Label>This is Fourth Tab</Label>
    </Container>
  );
};

export default TabFourth;

import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const SignUp = () => {
  return (
    <Container>
      <Label>This is SignUp Screen</Label>
    </Container>
  );
};

export default SignUp;

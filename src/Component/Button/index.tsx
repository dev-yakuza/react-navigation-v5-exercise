import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  border-radius: 50px;
  padding: 8px 16px;
  margin: 0px 8px;
  background-color: #e3116c;
`;
const Label = Styled.Text`
  color: white;
`;

interface Props {
  label: string;
  onPress?: () => void;
}
const Button = ({label, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;

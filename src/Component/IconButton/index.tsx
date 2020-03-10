import React from 'react';
import Styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = Styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

interface Props {
  iconName: string;
  color?: string;
  onPress?: () => void;
}
const IconButton = ({iconName, color, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon name={iconName} color={color ? color : 'white'} size={24} />
    </Container>
  );
};

export default IconButton;

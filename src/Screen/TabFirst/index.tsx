import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Button from '~/Component/Button';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

type NavigationProp = StackNavigationProp<TabFirstStackNaviParamList, 'Modal'>;
interface Props {
  navigation: NavigationProp;
}
const TabFirst = ({navigation}: Props) => {
  return (
    <Container>
      <Label>This is First Tab</Label>
      <Button label="Open Modal" onPress={() => navigation.navigate('Modal')} />
      <Button
        label="Open Full Modal"
        onPress={() => navigation.navigate('FullModal')}
      />
    </Container>
  );
};

export default TabFirst;

import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';
import Button from '~/Component/Button';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Label = Styled.Text``;

const ButtonContainer = Styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

type NavigationProp = StackNavigationProp<LoginStackNaviParamList, 'SignIn'>;
interface Props {
  navigation: NavigationProp;
}
const SignIn = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);

  return (
    <Container>
      <Label>This is SignIn Screen</Label>
      <Button
        label="SignIn"
        onPress={() => login('dev.yakuza@gamil.com', 'password')}
      />

      <ButtonContainer>
        <Button label="SignUp" onPress={() => navigation.navigate('SignUp')} />
        <Button
          label="Reset Password"
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </ButtonContainer>
    </Container>
  );
};

export default SignIn;

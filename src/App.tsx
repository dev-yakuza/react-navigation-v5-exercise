import 'react-native-gesture-handler';
import React from 'react';

import {UserContextProvider} from '~/Context/User';

import Navigator from './Screen/Navigator';

const App = () => {
  return (
    <UserContextProvider>
      <Navigator />
    </UserContextProvider>
  );
};

export default App;

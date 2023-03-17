import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';

import {Home} from '../screens/Home';
import {CharacterDetails} from '../screens/CharacterDetails';
import {RootStackParamList} from './types';
import {Routes} from './routes';

const Stack = createStackNavigator<RootStackParamList>();

interface Props {
  navigation?: NavigationContainerRef<ParamListBase>;
}

export const ScreenStack: React.FC<Props> = () => (
  <Stack.Navigator
    initialRouteName={Routes.Home}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.CharacterDetails} component={CharacterDetails} />
  </Stack.Navigator>
);

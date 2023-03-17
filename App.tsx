import 'react-native-gesture-handler';
import React from 'react';

import {RootProvider} from '@store/RootProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenStack} from '@navigation/ScreenStack';
import {Platform, SafeAreaView} from 'react-native';

const ConnectedApp = () => {
  const navigationRef = React.useRef<any>();

  return (
    <NavigationContainer ref={navigationRef}>
      <ScreenStack navigation={navigationRef.current} />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <RootProvider>
      <SafeAreaProvider>
        {Platform.OS === 'ios' ? (
          <SafeAreaView style={{flex: 1, width: '100%'}}>
            <ConnectedApp />
          </SafeAreaView>
        ) : (
          <ConnectedApp />
        )}
      </SafeAreaProvider>
    </RootProvider>
  );
};

export default App;

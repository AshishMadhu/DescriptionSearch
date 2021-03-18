/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar} from 'react-native';
import MainScreen from './screens/Main';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const THEME_COLOR = '#d93316';

function App() {
  return (
    <>
      <View style={{height: STATUSBAR_HEIGHT}}>
        <StatusBar backgroundColor={THEME_COLOR} />
      </View>
      <MainScreen />
    </>
  );
}

export default App;

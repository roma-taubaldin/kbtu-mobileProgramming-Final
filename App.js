import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { gStyles } from './styles/style'
import MainStack from './navigate'

const fonts = Font.loadAsync({
  'rb-bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  'rb-light': require('./assets/fonts/RobotoCondensed-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <MainStack />
    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
    // return (
    //   <View style={gStyle.main}>
    //     <Text>Hello</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // );

  }
}

const styles = StyleSheet.create({

});

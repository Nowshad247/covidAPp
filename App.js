import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    'GraphikRegular': require('./assets/fonts/GraphikRegular.otf'),
    'GraphikMedium': require('./assets/fonts/GraphikMedium.otf'),
    'GraphikBold': require('./assets/fonts/GraphikBold.otf'),
    'Antonio-Thin': require('./assets/fonts/Antonio-Thin.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

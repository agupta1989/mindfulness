import { Slot, Stack, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-ExtraBold": require('../assets/fonts/Poppins-ExtraBold.ttf'),
    "Poppins-ExtraLight": require('../assets/fonts/Poppins-ExtraLight.ttf'),
    "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (error) {
      throw error
    }
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error])

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  )
}

export default RootLayout

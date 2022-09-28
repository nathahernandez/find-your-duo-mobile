import { BackgroundIMG } from './src/components/Background/index'
import { StatusBar } from 'react-native'
import { useRef, useEffect } from 'react'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'

import './src/services/notificationsConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'



export default function App() {

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <BackgroundIMG>  
        <StatusBar 
            barStyle='light-content'
            backgroundColor='transparent'
            translucent 
          />
          {fontsLoaded ? <Routes /> : <Loading />}
    </BackgroundIMG>
  );
}
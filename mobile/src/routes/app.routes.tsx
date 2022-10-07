import { createNativeStackNavigator} from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { GameAds } from '../screens/GameAds'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='GameAds'
                component={GameAds}
            />
        </Navigator>
    )
}
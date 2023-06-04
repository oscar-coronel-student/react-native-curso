import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/TheMovieDb';
import { FadeScreen } from '../screens/FadeScreen';


export type RootStackProps = {
    HomeScreen: undefined,
    DetailScreen: {
        movie: Movie
    },
    FadeScreen: undefined
}

const Stack = createStackNavigator<RootStackProps>()

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
            initialRouteName='HomeScreen'
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="DetailScreen" component={ DetailScreen } />
            <Stack.Screen name="FadeScreen" component={ FadeScreen } />
        </Stack.Navigator>
    )
}
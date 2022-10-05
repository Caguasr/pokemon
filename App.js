import {ListPokemon} from './src/views';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Pokemons" component={ListPokemon}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


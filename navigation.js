import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import RestaurantDetails from './src/Screens/RestaurantDetails';
import { Provider as ReduxProvider } from "react-redux";
import configureMyStore from './src/Redux/store';

const store = configureMyStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false
    };
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantInfo" component={RestaurantDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )

}
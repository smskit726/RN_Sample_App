import {CardStyleInterpolators, createStackNavigator, StackNavigationOptions} from "@react-navigation/stack";
import React from "react";
import Logo from "../components/Logo";
import {DrawerToggleButton} from "@react-navigation/drawer";
import {useCustomNavi} from "./AppNavigator.tsx";
import BackButton from "../components/BackButton.tsx";
import HomeScreen from "../screens/HomeScreen.tsx";
import ShakeScreen from "../screens/ShakeScreen.tsx";

const Stack = createStackNavigator();

const StackNavigator = () => {
    const {navigation} = useCustomNavi();

    const options: StackNavigationOptions = {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerLeft: () => {
            const state = navigation.getState();
            const currentStack = state.routes[state.index];
            const canGoBack = currentStack.state && currentStack.state.index ? currentStack.state.index > 0 : false;
            return canGoBack ? <BackButton/> : <DrawerToggleButton tintColor='#fff'/>;
        },
        headerTitle: () => <Logo width={50} height={50}/>,
        headerTitleAlign: 'center',
        headerTitleStyle: { 
            fontWeight: 'bold' as 'bold',
        },
    }

    return (
        <Stack.Navigator initialRouteName="Stack" screenOptions={{...options}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Shake' component={ShakeScreen}
                          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
        </Stack.Navigator>
    );
}


export default StackNavigator;
import React from "react";
import {createDrawerNavigator, DrawerNavigationOptions} from "@react-navigation/drawer";
import WebviewScreen from "../screens/WebviewScreen";
import StackNavigator from "./StackNavigator";
import Logo from "../components/Logo";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const options: DrawerNavigationOptions = {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitle: () => <Logo width={50} height={50}/>,
        headerTitleAlign: 'center',
        headerTitleStyle: { 
            fontWeight: 'bold' as 'bold',
        },
    };
        
    return (
        <Drawer.Navigator
            screenOptions={{
                ...options,
                drawerStyle:{backgroundColor: '#fff'},
                drawerActiveBackgroundColor: '#eee',
            }}>
            <Drawer.Screen name="Stack" component={StackNavigator} options={{headerShown: false}}/>
            <Drawer.Screen name="Webview" component={WebviewScreen} options={{headerShown: false}}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
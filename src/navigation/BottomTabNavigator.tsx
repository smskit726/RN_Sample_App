import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsScreen from "../screens/SettingsScreen";
import MessengerScreen from "../screens/MessengerScreen";
import DrawerNavigator from "./DrawerNavigator";
import Logo from "../components/Logo";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const options: BottomTabNavigationOptions = {
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
        <Tab.Navigator
            initialRouteName="DrawerNav"
            screenOptions={{
                ...options,
                tabBarStyle: {backgroundColor: '#f4511e', paddingBottom: 5, paddingTop: 5, minHeight: 60},
                tabBarLabelStyle: {fontSize: 15},
                tabBarActiveTintColor: '#FFD180',
                tabBarInactiveTintColor: '#FFFFFF'}}>
            <Tab.Screen 
                name="DrawerNav" 
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => ( <MaterialCommunityIcons name="home" color={color} size={size}/> )}}/>
            <Tab.Screen
                name="Message"
                component={MessengerScreen} 
                options={{
                    tabBarIcon: ({color, size}) => ( <MaterialCommunityIcons name="message" color={color} size={size}/> )}}/>
            <Tab.Screen
                name="Settings"
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({color, size}) => ( <MaterialCommunityIcons name="cog-outline" color={color} size={size}/> )}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
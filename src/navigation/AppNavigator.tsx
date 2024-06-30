import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList, DrawerParamList, StackParamList} from '../types';

const useCustomNavi = () => {
    const navigation = useNavigation<
        StackNavigationProp<StackParamList> &
        BottomTabNavigationProp<BottomTabParamList> &
        DrawerNavigationProp<DrawerParamList>
    >();

    return { navigation };
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}

export { useCustomNavi, AppNavigator };
import {ColorValue, ViewProps} from "react-native";
import React from "react";

export type LogoProps = {
    width?: number;
    height?: number;
}

export type ValueOf<T> = T[keyof T];
export type NavigationPropType<T> = {
    screen?: keyof T;
    params?: ValueOf<T>;
}

export type BottomTabParamList = {
    Drawer: NavigationPropType<DrawerParamList>;
    Messege: undefined;
    Settings: undefined;
}

export type DrawerParamList = {
    Stack: NavigationPropType<StackParamList>;
    Webview: undefined;
}

export type StackParamList = {
    Home : undefined;
    Shake: undefined;
}

export type CardProps = {
    gradientColor?: (string | number)[];
    onPress?: () => void;
    children?: React.ReactNode[] | React.ReactNode;
}

export type PopupProps = {
    width? : number;
    height? : number;
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
    children?: React.ReactNode;
}
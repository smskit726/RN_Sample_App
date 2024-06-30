import React from 'react';
import LinearGradient from "react-native-linear-gradient"
import {CardProps} from "../types.tsx";
import {TouchableOpacity} from "react-native";

const Card = ({children, gradientColor, onPress}: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={{flexBasis: '40%', margin: 10, aspectRatio: 1.5}} activeOpacity={0.5}>
            <LinearGradient colors={gradientColor ? gradientColor : ['#FFF', '#FFF']}
                            useAngle={true}
                            angle={45}
                            angleCenter={{x: 0.5, y: 0.5}}
                            style={{display: 'flex', width:'auto', height:'100%', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                {children}
            </LinearGradient>
        </TouchableOpacity>
    );
}


export default Card;
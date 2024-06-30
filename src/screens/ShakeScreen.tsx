import React, {useEffect, useRef} from 'react';
import {Alert, Animated, Linking, Platform, StyleProp, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RNShake from 'react-native-shake';
import {GOOGLE_PLAY_STORE_NAVER, NAVER_APP} from "../utils/constant.ts";

const ShakeScreen = () => {
    const animValue = useRef(new Animated.Value(0)).current;

    const move = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    const xVal = animValue.interpolate({
        inputRange: [0,  1],
        outputRange: [-15, 15],
    });

    const animStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
        transform: [
            {translateX: xVal},
        ]
    };


    /* shake */
    const onShake = () => {
        RNShake.addListener(() => {
            Alert.alert('Alert', 'something todo...',[
                { text: '확인', onPress: openNaverApp },
                { text: '취소', style: 'cancel' },
            ])
        });
    }

    const openNaverApp = async () => {
        if(await Linking.canOpenURL(NAVER_APP)) {
            await Linking.openURL(NAVER_APP);
        }else {
            await Linking.openURL(GOOGLE_PLAY_STORE_NAVER);
        }
    }

    useEffect(() => {
        move()
        onShake();

        return () => RNShake.removeAllListeners();
    }, []);

    return (
        <View style={{height: '100%', alignItems:'center', justifyContent:'center'}}>
            <Animated.View style={[animStyle]}>
                <MaterialCommunityIcons name={'vibrate'} size={50}></MaterialCommunityIcons>
            </Animated.View>
        </View>
    );
}


export default ShakeScreen;
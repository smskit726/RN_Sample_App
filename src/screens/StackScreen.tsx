import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCustomNavi } from "../navigation/AppNavigator";

const StackScreen = () => {
    const {navigation} = useCustomNavi();

    const onPressHandler = () => {
        navigation.navigate('Detail', {id: '1'}) ;
    }

    return (
        <View style={[styles.container, styles.center]}>
            <Text style={[styles.txt, {marginBottom: 10}]}>StackScreen</Text>
            <TouchableOpacity onPress={onPressHandler} style={styles.btn}>
                <Text style={[styles.txt, {color: '#fff'}]}>Go Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StackScreen
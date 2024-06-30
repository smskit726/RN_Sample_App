import React from "react";
import {useCustomNavi} from "../navigation/AppNavigator.tsx";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {StyleProp, TextStyle} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

const BackButton = (prop? : { style?:StyleProp<TextStyle> }) => {
    const {navigation} = useCustomNavi();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name='chevron-left' style={prop?.style || {fontSize: 25, color: '#fff', marginLeft: 5}} />
        </TouchableOpacity>
    );
}

export default BackButton;
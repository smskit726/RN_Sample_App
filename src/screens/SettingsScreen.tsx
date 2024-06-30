import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

const SettingsScreen = () => {
    return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.txt}>Settings Screen.</Text>
        </View>
    )
}

export default SettingsScreen;
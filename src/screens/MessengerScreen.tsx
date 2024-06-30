import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

const MessengerScreen = () => {
    return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.txt}>Messenger Screen.</Text>
        </View>
    );
}


export default MessengerScreen;
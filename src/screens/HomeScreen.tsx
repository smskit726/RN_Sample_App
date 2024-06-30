import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";
import {styles} from "../styles/styles";
import Card from "../components/Card.tsx";
import {useCustomNavi} from "../navigation/AppNavigator.tsx";
import Banners from "../components/Banner.tsx";
import Popup from "../components/Popup.tsx";

const HomeScreen = () => {
    const {navigation} = useCustomNavi();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const onPressCard1 = () => {
        setIsModalVisible(true);
    }

    const onPressCard2 = () =>{
        navigation.navigate('Shake');
    }

    return (
        <>
            <Popup isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                <Text>PopUp</Text>
            </Popup>
            <ScrollView>
                <View>
                    <Banners/>
                </View>
                <View style={{...styles.flexContainer, marginVertical: 10}}>
                    <Card gradientColor={['#09203f', '#537895']} onPress={onPressCard1}>
                        <View style={{width: '100%', paddingVertical: 10, paddingHorizontal: 20}}>
                            <Text style={styles.cardTxt}>Open PopUp</Text>
                        </View>
                    </Card>
                    <Card gradientColor={['#09203f', '#537895']} onPress={onPressCard2}>
                        <View style={{width: '100%', paddingVertical: 10, paddingHorizontal: 20}}>
                            <Text style={styles.cardTxt}>Shake</Text>
                            <Text style={{...styles.cardTxt, textAlign: 'right'}}>open App</Text>
                        </View>
                    </Card>
                    <Card gradientColor={['#09203f', '#537895']}></Card>
                    <Card gradientColor={['#09203f', '#537895']}></Card>
                </View>
            </ScrollView>
        </>
    );
};

export default HomeScreen;
import React, {useRef, useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {PopupProps} from "../types.tsx";
import RNBounceable from '@freakycoder/react-native-bounceable';
import BouncyCheckbox, {BouncyCheckboxHandle} from "react-native-bouncy-checkbox";

const Popup = (props : PopupProps) => {
    const checkBoxRef = useRef<BouncyCheckboxHandle>(null);
    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);

    return (
        <Modal animationType="none" visible={props.isModalVisible} transparent={true}>
            <View style={{flex:1, justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <View style={{
                    width: props.width ? props.width : '80%',
                    height: props.height ? props.height : '80%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    overflow: 'hidden',
                }}>
                    <View style={{width: '100%', height: '90%', alignItems: 'center', justifyContent: 'center'}}>
                        {props.children}
                    </View>
                    <View style={{backgroundColor: '#ddd', width: '100%', height: '10%', alignItems: 'center', flexDirection: 'row'}}>
                        <BouncyCheckbox
                            ref={checkBoxRef}
                            style={{marginLeft:20, marginRight:10}}
                            size={20}
                            fillColor={'red'}
                            unFillColor={'#fff'}
                            isChecked={checkBoxValue}
                            disableText={true}
                            onPress={(value) => setCheckBoxValue(value)}
                        />
                        <RNBounceable onPress={() => setCheckBoxValue(!checkBoxValue)}>
                            <Text>7일동안 열지 않기</Text>
                        </RNBounceable>
                        <Pressable
                            onPress={() => (props.setIsModalVisible(false))}
                            style={{marginLeft:'auto', marginRight:20}}>
                            <Text>닫기</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


export default Popup;
import { StyleSheet, Text, View } from "react-native"
import Img from '../assets/img/logo.svg';
import {LogoProps} from "../types.tsx";

const Logo = (props: LogoProps) => {

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
        }
    });

    return (
        <View style={styles.container}>
            <View>
                <Img width={props.width} height={props.height}/>
            </View>
            <Text style={styles.title}>React-Native</Text>
        </View>
    );
}

export default Logo;
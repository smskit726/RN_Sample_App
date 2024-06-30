import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {flex: 1, width: '100%', height: '100%'},
    center: {justifyContent: 'center', alignItems: 'center'},
    txt: {color: '#000', textAlign: 'center'},
    btn: {color:'#efefef', backgroundColor: '#568444', borderRadius: 10, elevation: 8, padding: 10},
    flexContainer: {display: 'flex', width:'100%', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    item: {flexBasis: '40%', height: 120, margin: 5, alignItems: 'center' , justifyContent: 'center', borderRadius: 10},
    cardTxt: {fontSize: 30, color: '#efefef', fontFamily: 'HSSaemaul-Regular'},
    PopContainer: {justifyContent: 'center',alignItems: 'center', borderRadius: 10, borderWidth:1}
});

export { styles }
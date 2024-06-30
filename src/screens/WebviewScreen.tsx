import React from "react";
import WebView from "react-native-webview";

const WebviewScreen = () => {
    return (
        <WebView source={{uri: 'https://www.naver.com'}}/>
    );
}

export default WebviewScreen
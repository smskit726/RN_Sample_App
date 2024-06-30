import React from 'react';
import Swiper from 'react-native-swiper';
import {Dimensions, Text, View} from "react-native";

const Banner = () => {
    return (
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeeeee'}}>
            <Text>Banner</Text>
        </View>
    );
}

const Banners = () => {
    const slideTime: number = 5;
    const width = Math.floor(Dimensions.get('window').width);

    return (
        <Swiper autoplay showsPagination={false} width={width} height={100} autoplayTimeout={slideTime}>
            {
                Array.from({length: 4}).map((_, i) => (
                    <Banner key={i}/>
                ))
            }
        </Swiper>
    );
}


export default Banners;
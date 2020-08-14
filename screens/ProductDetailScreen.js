import React from 'react';
import {View ,ImageBackground} from 'react-native';


const ProductDetailScreen = props=> {
    return(
        <ImageBackground source = {require('../assets/item-1-bg.png')}
            height = {400}
            width = {400}
        />
    )
}


export default ProductDetailScreen;
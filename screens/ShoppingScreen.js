import React , {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image,ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import faker from "faker";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductDetails from '../components/ProductDetails';
import BuyNow from './ShopNowScreen';

const Home = (props) => {
const [showFull , changeFull] = useState(false);
const showFullPage = () => {
    changeFull(true);
}
const closeFullPage = () => {
    changeFull(false);
}

const buyNow = () => {
    props.navigation.navigate('BuyNow')
}
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#181835",
        padding: 20,
        paddingLeft: 15,
        paddingRight: 25,
      }}
    >
      <Text style={[style.text]}>SHOP</Text>
      <ScrollView>

      <View style={style.itemList}>
          <TouchableOpacity onPress = {showFullPage} style = {{width : "110%" ,marginBottom : 15}}>
          <Image
            source={require("../assets/p-1.png")}
            style={{
              bottom: 0,
              left: 10,
              height: 148,
              width: 148,
              borderRadius : 15
            }}
          />
          </TouchableOpacity>
         
          <TouchableOpacity onPress = {showFullPage} style = {{width : "110%" ,marginBottom : 15}}>
          <Image
            source={require("../assets/p-3.png")}
            style={{
              bottom: 0,
              left: 10,
              height: 149,
              width: 148,
              borderRadius : 10
            }}
          /></TouchableOpacity>
           <TouchableOpacity onPress = {showFullPage} style = {{width : "110%" ,marginBottom : 15}}>
         <Image
            source={require("../assets/p-2.png")}
            style={{
              bottom: 0,
              left: 10,
              height: 189,
              width: 148,
              borderRadius : 10
            }}
          /></TouchableOpacity>
          <TouchableOpacity onPress = {showFullPage} style = {{width : "110%" ,marginBottom : 15}}>
           <Image
            source={require("../assets/p-4.png")}
            style={{
              bottom: 0,
              left: 10,
              height: 186,
              width: 148,
              borderRadius : 10
            }}
          /></TouchableOpacity>
          <TouchableOpacity onPress = {showFullPage} style = {{width : "110%" ,marginBottom : 15}}>
          <Image
            source={require("../assets/p-5.png")}
            style={{
              bottom: 0,
              left: 10,
              height: 186,
              width: 148,
              borderRadius : 10
            }}
          /></TouchableOpacity>
          <TouchableOpacity onPress = {showFullPage} style = {{width : "110%" ,marginBottom : 15}}>
          <Image
            source={require("../assets/p-6.png")}
            style={{
              bottom: 0,
              left: 10,
              height: 186,
              width: 148,
              borderRadius : 10
            }}
          />
          </TouchableOpacity>
      </View>
      </ScrollView>
      {showFull ? <ProductDetails closePage = {closeFullPage} buyNow = {buyNow}/> : null}
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#fff",
  },
  itemList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent : 'space-between',
    alignItems : "stretch",
    width : "100%",
    padding : 10,
  },
});
const Stack = createStackNavigator();

const Navigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header name="Jitendra" img={faker.image.avatar()} />,
      }}
    >
      <Stack.Screen name="Shopping" component={Home} />
      <Stack.Screen name="BuyNow" component={BuyNow} />

    </Stack.Navigator>
  );
};

export default Navigator;

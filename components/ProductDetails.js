import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

const ProductDetails = (props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "#494949",
          width: 35,
          height: 35,
          borderRadius: 35,
          position: "absolute",
          zIndex: 2000,
          top: -17,
          right: -17,
        }}
      onPressIn = {props.closePage}
      >
        <Entypo
          name="cross"
          size={30}
          color="#fff"
          style={{ textAlign: "center" }}
         
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/shoes.png")}
        style={{ width: "100%", height: "50%" , borderTopLeftRadius : 30}}
      />
      <View
        style={{
          backgroundColor: "#171732",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent : "space-between"
        }}
      >
        <Text style={style.textStyle}>Adidas 10% Off</Text>
        <View>
          <Text style = {{fontSize : 14 , color : "#fff", textAlign : "center"}}>300</Text>
          <Text style = {{fontSize : 14 , color : "#fff"}}>POINTS</Text>
        </View>
        <Text style = {{fontSize : 14 , color : "#fff", textAlign : "justify", marginTop : 40}}>
          Get 10% Off of a €100 purchase. Go to your nearest store to avail this
          discount. Valid from Jun - July, 2020
        </Text>
        <Button title="BUY NOW" containerStyle = {{width : "100%" , borderRadius : 20,marginTop : 30}}
          onPress = {props.buyNow}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 290,
    alignItems: "center",
    height: "100%",
    zIndex: 1000,
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
    borderBottomEndRadius: 30,
    borderTopLeftRadius : 30
  },
  image: {
    width: 259,
    height: "80%",
  },
  textContainer: {
    width: 259,
    backgroundColor: "#0D0D25F3",
    height: "20%",
    padding: 10,
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
  },
});
export default ProductDetails;

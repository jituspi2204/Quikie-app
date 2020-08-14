import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const ProductCard = (props) => {
  return (
    <View style={style.container}>

        <Image source={props.image} style={style.image} />
        <View style={style.textContainer}>
          <Text style={style.textStyle}>{props.name}</Text>
          <Text style={[style.textStyle, { fontSize: 12, marginTop: 10 }]}>
            {props.text}
          </Text>
        </View>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 259,
    alignItems: "center",
    height: "100%",
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
    fontSize: 14,
  },
});
export default ProductCard;

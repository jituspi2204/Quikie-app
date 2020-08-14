import React from "react";
import { View, Image, StyleSheet, Text, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Header = (props) => {
  return (
    <View style={style.header}>
    <LinearGradient
      colors={["#0D0D25", "#534AA2"]}
      start={[0.6, 0.8]}
      end={[0.7, 0.1]}
      style={{
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{ uri: props.img }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 80,
          }}
        />
        <Text style={style.text}>{props.name}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "35%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "35%",
          }}
        >
          <View>
            <Text style={style.pointText}>Points</Text>
            <Text
              style={[
                style.pointText,
                { fontSize: 18, textAlign: "center" },
              ]}
            >
              40
            </Text>
          </View>
          <View style={style.logoContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 12,
                marginTop: 8,
              }}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  </View>
  );
};

const style = StyleSheet.create({
    header: {
        width: "100%",
        height: 101,
      },
      logoContainer: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "#36C7FF",
        width: 60,
        height: 60,
        marginLeft: 20,
      },
      heading: {
        color: "#fff",
        marginLeft: 5,
        fontSize: 16,
        marginTop: 5,
        marginBottom : 20
      },
      text: {
        color: "#fff",
        fontSize: 14,
        fontStyle: "italic",
        marginLeft: 10,
      },
      pointText: {
        color: "#fff",
        fontSize: 10,
      },
});
export default Header;
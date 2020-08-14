import React , {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import {Input , Button} from  'react-native-elements';
import { AntDesign } from "@expo/vector-icons";

const ShopNowScreen = (props) => {
  const[ done ,changeDone]  =useState(false);
    const block = (
        <View
        style={{ margin: 20, alignSelf: "center", width: "80%", height: 400 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#2F2865",
            padding: 20,
            borderTopLeftRadius: 25,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 16 }}>Adidas 10% Off</Text>
            <Text style={{ color: "#fff", fontSize: 12 }}>Jun-July ,2020</Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
              300
            </Text>
            <Text style={{ color: "#fff", fontSize: 10 }}>POINTS</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding : 10,
            paddingTop : 20,
            flexWrap : "wrap",
            backgroundColor : "#171732"
          }}
        >
             <Input
          placeholder=""
          label="FIRST NAME"
          labelStyle={{ fontSize: 12 }}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40, }}
          containerStyle = {{width :"45%"}}
        />
        <Input
          placeholder=""
          label="LAST NAME"
          labelStyle={{ fontSize: 12 }}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 ,width : 100 }}
          containerStyle = {{width :"45%"}}
        />
        <Input
          label="PHONE NO"
          inputContainerStyle={{}}
          labelStyle={{ fontSize: 12 }}
          keyboardType = "numeric"
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
          
        />
        <Input
          label="ADDRESS"
          inputContainerStyle={{}}
          labelStyle={{ fontSize: 12 }}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
        />
          <Input
          inputContainerStyle={{}}
          labelStyle={{ fontSize: 12 }}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
        />
        <Button
          title="BUY NOW"
          style={style.buttonStyle}
          containerStyle={style.button}
          buttonStyle={{ backgroundColor: "#5098F2" }}
          inputContainerStyle={{ height: 40 }}
          onPress = {() => changeDone(true)}
        />
        </View>
      </View>
    );
    const thanks = (
        <View style = {{padding : 20 ,display :"flex" , justifyContent : "center" ,alignItems : "center"}}>
            <AntDesign name = "checkcircleo" size = {60} color = "#36C7FF"/>
            <Text style = {{color : "#fff" , fontSize : 16 , marginTop : 20}}>Thank you for your purchase!</Text>
            <View style = {{borderBottomWidth : 2 , borderBottomColor : "#31316A" ,width : "90%" , height : 60}}>
            <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            marginTop : 100
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 16 }}>Adidas 10% Off</Text>
            <Text style={{ color: "#fff", fontSize: 12 }}>Jun-July ,2020</Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
              300
            </Text>
            <Text style={{ color: "#fff", fontSize: 10 }}>POINTS</Text>
          </View>
        </View>
            </View>
        </View>
    )
  return (
    <View style={style.container}>
      <View style={{ padding: 20 }}>
        <AntDesign name="arrowleft" size={15} color="#fff" onPress = {() => props.navigation.goBack()}>
          {" "}
          SHOP
        </AntDesign>
      </View>
      {done ? thanks : block}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181835",
  },
  inputContainer: {
    padding: 30,
    marginTop: 20,
  },
  inputStyle: {
    color: "#fff",
    fontSize: 15,
  },
  button: {
    marginTop: 30,
    borderRadius: 200,
    marginLeft: 10,
    marginRight: 10,
    width : "95%"
  },
  buttonStyle: {
    alignItems: "center",
  },
});

export default ShopNowScreen;

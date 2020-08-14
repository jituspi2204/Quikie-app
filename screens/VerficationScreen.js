import React , {useState}from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const VerificationScreen = (props) => {

 const [one ,changeOne]  = useState(null);

  return (
    <ScrollView style={style.container}>
      <View style={style.logoContainer}>
        <Image source={require("../assets/logo.png")} style={style.logo} />
      </View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop : 40
        }}
      >
        <Feather name="arrow-left" size={30} color="#fff" />
        <Text style={{ fontSize: 25, color: "#fff",marginLeft : 20,marginBottom : 10 }}>Verification</Text>
        <Text style={style.text}>
          We have sent you a verification code to your email ID {}
        </Text>
      </View>
      <View style={style.inputContainer}>
        <Input
          inputContainerStyle={{width : "100%"}}
          inputStyle={style.inputStyle}
          containerStyle = {{width : "20%"}}
        />
        <Input
          inputContainerStyle={{width : "100%"}}
          inputStyle={style.inputStyle}
          containerStyle = {{width : "20%"}}
        />
        <Input
          inputContainerStyle={{width : "100%"}}
          inputStyle={style.inputStyle}
          containerStyle = {{width : "20%"}}
        />
        <Input
          inputContainerStyle={{width : "100%"}}
          inputStyle={style.inputStyle}
          containerStyle = {{width : "20%"}}
        />
     
      </View>
      <Text
        style={[style.text, { textAlign: "center" }]}
        onPress={() => {}}
      >
        Didn't get a code? Tap to resend
      </Text>
        <Button
          title="VERIFY"
          style={style.buttonStyle}
          containerStyle={style.button}
          buttonStyle={{ backgroundColor: "#5098F2" }}
        />
      <Text
        style={[style.text, { textAlign: "center", marginTop: 30 }]}
        onPress={() => props.navigation.navigate("Login")}
      >
        Have an account? Log in
      </Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181835",
  },
  logoContainer: {
    borderWidth: 1,
    borderRadius: 200,
    borderColor: "#1A97B9",
    height: 120,
    width: 120,
    marginTop: 80,
    alignSelf: "center",
  },
  logo: {
    width: 85,
    height: 67,
    marginTop: 20,
    alignSelf: "center",
  },
  inputContainer: {
    padding: 30,
    marginTop: 20,
    display : "flex",
    flexDirection : "row",
    flexWrap : "wrap",
    justifyContent : "space-between"
  },
  inputStyle: {
    color: "#fff",
    fontSize: 24,
    textAlign : "center"
  },
  button: {
    marginTop: 90,
    borderRadius: 200,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonStyle: {
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#fff",
    paddingLeft: 15,
    paddingRight : 20,
    textAlign : "justify"
  },
});
export default VerificationScreen;

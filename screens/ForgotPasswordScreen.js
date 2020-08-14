import React , {useState}from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Feather ,Entypo} from "@expo/vector-icons";

const ForgotPasswordScreen = (props) => {

 const [email, changeEmail] = useState(['' , false]);
 const chagneValidState = (event , id) => {
    let val = event.nativeEvent.text;
    const rgx = /[a-zA-Z0-9]*@[a-zA-Z]*\.(com|io)/;
    rgx.test(val) ? changeEmail([val , true]) : changeEmail([val , false]);  
};
 const getRightIcon = (id) => {
    return id[1] ? (
      <Feather name="check" size={20} color="#fff" />
    ) : (
      <Entypo name="cross" size={20} color="#fff" />
    );
};
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
        <Text style={{ fontSize: 25, color: "#fff",marginLeft : 20,marginBottom : 10 }}>Forgot password?</Text>
        <Text style={style.text}>
        Give us your registered email address and we'll send you link to reset your password
        </Text>
      </View>
      <View style={style.inputContainer}>
      <Input
          placeholder=""
          label="EMAIL"
          rightIcon={() => getRightIcon(email)}
          labelStyle={{ fontSize: 12 }}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
          value={email[0]}
          onChange={(event) => {
            chagneValidState(event , "email");
          }}
        />
      </View>
      <Text
        style={[style.text, { textAlign: "center" }]}
        onPress={() => {}}
      >
        Didn't get a code? Tap to resend
      </Text>
        <Button
          title="SEND"
          style={style.buttonStyle}
          containerStyle={style.button}
          buttonStyle={{ backgroundColor: "#5098F2" }}
          onPress = {() => props.navigation.navigate("ResetPassword")}
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
    fontSize: 14,
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
export default ForgotPasswordScreen;

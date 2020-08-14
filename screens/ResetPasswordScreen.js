import React , {useState}from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Feather ,Entypo} from "@expo/vector-icons";

const ResetPasswordScreen = (props) => {
    const [password, changePassword] = useState(['', false]);
    const [confirmPassword, changeConfirmPassword] = useState(['', false]);
    const chagneValidState = (event , id) => {
        let val = event.nativeEvent.text;
        if(id === 'password'){
            val !== '' ? changePassword([val , true]) : changePassword([val , false]);
        }else if(id === 'confirmPassword'){
            val === password[0] && password[0] !== '' ? changeConfirmPassword([val , true]) : changeConfirmPassword([val , false])
        }
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
        <Text style={{ fontSize: 25, color: "#fff",marginLeft : 20,marginBottom : 10 }}>Reset password</Text>
        <Text style={style.text}>
            E-mail address verified! Set a new password
        </Text>
      </View>
      <View style={style.inputContainer}>
      <Input
          label="NEW PASSWORD"
          inputContainerStyle={{}}
          rightIcon={() => getRightIcon(password)}
          labelStyle={{ fontSize: 12 }}
          secureTextEntry={true}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
          value={password[0]}
          onChange={(event) => {
            chagneValidState(event , "password");
          }}
        />
        <Input
          label="RE-ENTER PASSWORD"
          inputContainerStyle={{}}
          rightIcon={() => getRightIcon(confirmPassword)}
          labelStyle={{ fontSize: 12 }}
          secureTextEntry={true}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
          onChange={(event) => {
            chagneValidState(event , "confirmPassword");
          }}
          value={confirmPassword[0]}
        />
      </View>
        <Button
          title="RESET PASSWORD"
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
    fontSize: 14,
  },
  button: {
    marginTop: 20,
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
export default ResetPasswordScreen;

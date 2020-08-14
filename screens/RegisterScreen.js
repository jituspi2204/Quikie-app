import React, { useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet , TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { Feather, Fontisto, Entypo } from "@expo/vector-icons";

const RegisterScreen = (props) => {
  const [userID, changeUserID] = useState(['', false]);
  const [password, changePassword] = useState(['', false]);
  const [confirmPassword, changeConfirmPassword] = useState(['', false]);
  const [email, changeEmail] = useState(['' , false]);
  const [gender , changeGender] = useState(["MALE" ,true]);

  const chagneValidState = (event , id) => {
    let val = event.nativeEvent.text;
    if (id === "userID") {
        val !== '' ? changeUserID([val , true]) : changeUserID([val , false]);
    }else if(id === 'email'){
        const rgx = /[a-zA-Z0-9]*@[a-zA-Z]*\.(com|io)/;
        rgx.test(val) ? changeEmail([val , true]) : changeEmail([val , false]);
    }else if(id === 'password'){
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
      <Text style={[style.text, { textAlign: "center", marginTop: 50 }]}>
        PROFILE PICTURE
      </Text>
      <View style={style.photoContainer}>
        <Feather
          name="camera"
          size={20}
          color="#fff"
          style={{ textAlign: "center", marginTop: 25 }}
        />
      </View>
      <View
        style={{
          marginTop: 12,
          paddingLeft: 80,
          paddingRight: 45,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Text style={[style.text, { width: "100%" }]}>GENDER</Text>
        <View>
          <TouchableOpacity style={[style.iconStyle , gender[0] === 'MALE' ? style.active : null ]} onPress = {() => changeGender(["MALE" , true])}>
            <Fontisto name="male" size={20} color = "#fff" />
          </TouchableOpacity>
          <Text style={[style.text, style.fontSizeSmall]}>MALE</Text>
        </View>
        <View>
          <TouchableOpacity style={[style.iconStyle , gender[0] === 'FEMALE' ? style.active : null]} onPress = {() => changeGender(["FEMALE" ,true])}>
            <Fontisto name="female" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={[style.text, style.fontSizeSmall]}>FEMALE</Text>
        </View>

        <View>
          <TouchableOpacity style={[style.iconStyle , gender[0] === 'OTHER' ? style.active : null]} onPress = {() => changeGender(["OTHER" , true])}>
            <Fontisto name="male" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={[style.text, style.fontSizeSmall]}>OTHER</Text>
        </View>

        <Feather
          name="check"
          size={20}
          color="#fff"
          style={{ alignItems: "center", marginTop: 20 }}
        />
      </View>
      <View style={style.inputContainer}>
        <Input
          placeholder=""
          label="USERNAME"
          rightIcon={() => getRightIcon(userID)}
          labelStyle={{ fontSize: 12 }}
          inputStyle={style.inputStyle}
          inputContainerStyle={{ height: 40 }}
          value={userID[0]}
          onChange={(event) => {
            chagneValidState(event , "userID");
          }}
        />
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
        <Input
          label="PASSWORD"
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
          label="CONFIRM PASSWORD"
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
        <Button
          title="REGISTER"
          style={style.buttonStyle}
          containerStyle={style.button}
          buttonStyle={{ backgroundColor: "#5098F2" }}
          inputContainerStyle={{ height: 40 }}
          onPress = {() => props.navigation.navigate("Verification")}
        />
        <Text
          style={[style.text, { textAlign: "center", marginTop: 20 }]}
          onPress={() => props.navigation.navigate("Login")}
        >
          Have an account? Log in
        </Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181835",
  },
  photoContainer: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#1A97B9",
    height: 73,
    width: 73,
    marginTop: 10,
    alignSelf: "center",
  },
  logo: {
    width: 140,
    height: 110,
    marginTop: 20,
    alignSelf: "center",
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
  },
  buttonStyle: {
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#fff",
  },
  fontSizeSmall: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
  },
  active : {
      backgroundColor : "#116AD8"
  },
  iconStyle: {
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#A7A7A7",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RegisterScreen;

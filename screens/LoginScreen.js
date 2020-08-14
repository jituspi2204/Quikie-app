import React  ,{useState}from 'react';
import {View ,ScrollView ,  Text , Image ,StyleSheet} from 'react-native';
import  {Input , Button} from 'react-native-elements';
import { Feather ,Entypo} from '@expo/vector-icons';

const LoginScreen = props => {
    const [email , changeEmail] = useState(['' ,false]);
    const [password , changePassword]  = useState(['' ,false]);

    const chagneValidState = (event , id) => {
        let val = event.nativeEvent.text;
         if(id === 'email'){
            const rgx = /[a-zA-Z0-9]*@[a-zA-Z]*\.(com|io)/;
            rgx.test(val) ? changeEmail([val , true]) : changeEmail([val , false]);
        }else if(id === 'password'){
            val !== '' ? changePassword([val , true]) : changePassword([val , false]);
        }
      };
    
      const getRightIcon = (id) => {
          return id[1] ? (
            <Feather name="check" size={20} color="#fff" />
          ) : (
            <Entypo name="cross" size={20} color="#fff" />
          );
      };
    return(
      <ScrollView style = {style.container}>
          <View style = {style.logoContainer}>
            <Image source = {require('../assets/logo.png')} style = {style.logo}/>
          </View>
          <View style = {style.inputContainer}>
            <Input 
                placeholder = "Email"
                label = "EMAIL"
                rightIcon={() => getRightIcon(email)}
                labelStyle = {{fontSize : 14}}
                inputStyle  = {style.inputStyle}
                value={email[0]}
                onChange={(event) => {
                    chagneValidState(event , "email");
                }}
            />
            <Input 
                placeholder = "Password"
                label = "PASSWORD"
                inputContainerStyle = {{}}
                rightIcon={() => getRightIcon(password)}
                labelStyle = {{fontSize : 14}}
                secureTextEntry = {true}
                inputStyle  = {style.inputStyle }
                value={password[0]}
                onChange={(event) => {
                    chagneValidState(event , "password");
                }}
            />
            <Text style = {style.text}
                onPress = {() => {props.navigation.navigate("ForgotPassword")}}
            >Forgot password</Text>
            <Button 
                title = "LOG IN"
                style = {style.buttonStyle}
                containerStyle = {style.button}
                buttonStyle = {{backgroundColor : "#5098F2"}}
                onPress = {() => props.navigation.navigate('Home')}
            />
          </View>
          <Text style = {[style.text , {textAlign : "center"}]}
            onPress = {() => {props.navigation.navigate("Register")}}
          >Don't have account ? Create one</Text>
      </ScrollView>  
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#181835"
    },
    logoContainer : {
        borderWidth : 1,
        borderRadius : 200,
        borderColor: "#1A97B9",
        height : 187,
        width : 187,
        marginTop : 100,
        alignSelf :"center",
    },
    logo : {
        width : 140,
        height : 110,
        marginTop : 20,
        alignSelf : "center"
    },
    inputContainer : {
        padding : 30,
        marginTop : 20
    },
    inputStyle : {
        color : "#fff",
        fontSize : 15
    },
    button : {
        marginTop : 50,
        borderRadius : 200,
        marginLeft : 10,
        marginRight : 10,
    },
    buttonStyle : {
        alignItems : "center",
    },
    text : {
        fontSize : 12,
        color : "#fff",
        paddingLeft : 10
    }
})
export default LoginScreen;
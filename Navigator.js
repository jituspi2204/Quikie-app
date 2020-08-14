import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import VerificationScreen from "./screens/VerficationScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RankScreen from './screens/RankScreen';
import ShoppingScreen from './screens/ShoppingScreen';


import { Feather, MaterialIcons, EvilIcons } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();


const HomeNavigator = props => {
   return( 
        <Bottom.Navigator tabBarOptions = {{
            tabStyle : {
                backgroundColor : "#181835",
                borderTopWidth : 0,
            },
            style : {
                borderTopWidth : 0
            },
            activeTintColor : "#D93069"

        }}>
            <Bottom.Screen name = "Home" component = {HomeScreen} options = {{
                tabBarIcon : ({color}) => <Feather name = "home" size = {25} color = {color} 
                />,
                tabBarLabel : ''
            }}/> 
            <Bottom.Screen name = "Technology" component = {HomeScreen} options = {{
                tabBarIcon : ({color}) => <MaterialIcons name = "border-all" size = {25} color = {color} 
                />,
                tabBarLabel : ''
            }}/>
            <Bottom.Screen name = "Prize" component = {RankScreen} options = {{
                tabBarIcon : ({color}) => <EvilIcons name = "trophy" size = {25} color = {color} 
                />,
                tabBarLabel : ''
            }}/>  
             <Bottom.Screen name = "cart" component = {ShoppingScreen}  options = {{
                tabBarIcon : ({color}) => <EvilIcons name = "cart" size = {25} color = {color} 
                />,
                tabBarLabel : '',
            }}/> 
        </Bottom.Navigator>
    )
}

const Stack = createStackNavigator();
const Navigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name = "Home" component = {HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

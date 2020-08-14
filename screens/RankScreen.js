import React from "react";
import { View, StyleSheet, Text, Image ,ScrollView,Switch} from "react-native";
import Header from '../components/Header';
import faker from "faker";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const img = faker.image.avatar();
const name = faker.name.firstName();
let top = [] ;
for(let i = 0; i < 6 ; i++){
    let newPerson = {
        name : faker.name.firstName(),
        image : faker.image.avatar(),
        points : faker.random.number(15000),
    };
    top.push(newPerson);
}

top.sort(function(a, b){
    return b.points - a.points
});

class RankScreen extends React.Component {

    state = {
        isEnabled : false,
        rankList : []
    }

    componentDidMount(){
        this.setState({
            ...this.state, 
            rankList : top
        })
    }
 render(){

const rankBlock = this.state.rankList.map((el ,idx) => {
    return (
        <TouchableOpacity key = {idx}>
        <View style = {style.block}  >
    
         <Text style = {[style.text , {marginRight : 40}]}>{idx + 1}</Text>
         <View style = {{display : "flex" , flexDirection : "row" , alignItems : "center" , justifyContent : "flex-start" ,width : "65%"}}>
             <Image source = {{uri : el.image}}
                 style = {{width : 50 ,height : 50 , borderRadius : 50, marginRight : 20}}
             />
             <View>
                 <Text style = {[style.text, {marginLeft : 0, marginBottom :10,fontSize : 16}]}>{el.name}</Text>
                 <FontAwesome name = "star" size = {12} color = "#fff">{" " + el.points}</FontAwesome>
             </View>
         </View>
         <Image source = {require('../assets/logo.png')}
             style = {{width : 50 , height :50 ,}}
         />
        </View>
        </TouchableOpacity>
    )
})


  return (
    <View style={style.container}>
        <Header name = {faker.name.firstName()} img = {faker.image.avatar()}/>
       <View style = {style.rankHeading}>
                <Text style = {[style.text , {fontSize : 16}]}>RANKING</Text>
                <View style = {style.toggler}>
                    <Text style = {style.text}>Monthly</Text>
                    <Switch style = {{width : 60 , height : 40}} 
                        trackColor= "#767577"
                        thumbColor= "#36C7FF"
                        value = {this.state.isEnabled}
                        onValueChange = {() => {this.setState({...this.state , isEnabled : !this.state.isEnabled})}}
                    />  
                    <Text style = {style.text}>Yearly</Text>
                </View>

       </View>
       <ScrollView style = {style.rankList}>
            {rankBlock}
       </ScrollView>
    </View>
  );
}
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181835",
  },
  header: {
    width: "100%",
    height: 101,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
  },
  pointText: {
    color: "#fff",
    fontSize: 10,
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
 rankHeading : {
     display :"flex",
     width : "100%",
     flexDirection : "row",
     alignItems : "center",
     justifyContent : "space-between",
     paddingLeft : 10,
     paddingRight : 10
 },
 toggler : {
     display : "flex",
     flexDirection : "row",
     alignItems : "center",
     justifyContent:  "flex-start",
     width : "45%"
 },
 rankList : {
     display : "flex",
     flexDirection : "column",
     width : "100%",

 },
 block : {
     alignSelf : "center",
     width : "90%",
     display :"flex",
     flexDirection : "row",
     justifyContent : "flex-start",
     alignItems : "center",
     height : 90,
     margin : 10,
     borderBottomWidth : 2,
     borderBottomColor : "#212143"
 }

});



export default RankScreen;

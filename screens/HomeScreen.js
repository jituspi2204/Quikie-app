import React from "react";
import { View, StyleSheet, Text,PanResponder ,Animated} from "react-native";
import faker from "faker";
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const img = faker.image.avatar();
const name = faker.name.firstName();
const items = [
    {
      name: "Nike Joyride",
      text: faker.lorem.words(10),
      image: require("../assets/item-1.png"),
    },
    {
        name: "Nike Joyride",
        text: faker.lorem.words(10),
        image: require("../assets/item-2.png"),
    },
    {
        name: "Nike Joyride",
        text: faker.lorem.words(10),
        image: require("../assets/item-3.png"),
    },
    {
        name: "Nike Joyride",
        text: faker.lorem.words(10),
        image: require("../assets/item-4.png"),
    },
  ];


class HomeScreen extends React.Component {

constructor(props){
    super(props)
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove : (event ,gesture) => {
            position.setValue({x : gesture.dx , y : 0})
        },
        onPanResponderRelease : (event , gesture) => {
            if(gesture.dx >= 50){
                let cr = this.state.current;
                cr = cr === 0 ? items.length - 1 : cr - 1;
                Animated.spring(this.state.position , {toValue : {x : 0 , y : 0}}).start();
                this.setState({
                    ...this.state , 
                    current : cr
                })
            }else if(gesture.dx <= 50){
                let cr = this.state.current;
                cr = cr === items.length - 1 ? 0 : cr + 1;
                Animated.spring(this.state.position , {toValue : {x : 0 , y : 0}}).start();
                this.setState({
                    ...this.state , 
                    current : cr
                })
            }
        }
    });
    this.state = {
        panResponder ,
        position,
        current : 0
    }
}
getCardStyle = () => {
    const {position} = {...this.state};
    const shrink = position.x.interpolate({
        inputRange : [-100 , 0, 100],
        outputRange : [445,490, 445]
    });
    return {
        ...position.getLayout(),
        height : shrink
    }
}
getLeftCardStyle = () => {
    const {position} = {...this.state};
    const shrink = position.x.interpolate({
        inputRange : [ 0, 100],
        outputRange : [400,445]
    })
    return {
        ...position.getLayout(),
        height : shrink
    }
}
getRightCardStyle = () => {
    const {position} = {...this.state};
    const shrink = position.x.interpolate({
        inputRange : [ -100 , 0],
        outputRange : [445,400]
    })
    return {
        ...position.getLayout(),
        height : shrink
    }
}
 render(){
  return (
    <View style={style.container}>
      <Header name = {name} img = {img}/>
      <View style = {style.cardBox}>
        <Text style={[style.heading , {textAlign  :"left" ,width : "100%"}]}>NEWS</Text>
        <View style = {[style.box ]} 
            {...this.state.panResponder.panHandlers}>
            <Animated.View style ={[style.left , this.getLeftCardStyle()]}>
                <ProductCard {...items[this.state.current === 0 ? items.length - 1 : this.state.current - 1]} />
            </Animated.View>
            <Animated.View style = {[style.center , this.getCardStyle()]}>
                <ProductCard {...items[this.state.current]} navigation = {this.props.navigation}/>
            </Animated.View>
            <Animated.View style ={[style.right , this.getRightCardStyle()]}>
                <ProductCard {...items[this.state.current === items.length - 1 ? 0 : this.state.current + 1]} />
            </Animated.View>
        </View>
      </View>
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
    fontStyle: "italic",
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
  cardBox : {
      padding : 20,
      alignItems : "center"
  },
  box : {
    width : 289,
    height : 500,
    alignItems : "center",
    display : "flex",
    flexDirection : "row",
    justifyContent : "center"
  },
  left : {
    width : 269,
    height : 400,
    borderWidth : 5,
    borderColor : "#EACC00",
    shadowOffset: { width: 20, height: 20 },
    shadowColor: "#EACC00",
    shadowOpacity: 1,
    elevation: 20,
    // background color must be set
    backgroundColor : "#0000",
    alignItems : "center",
      transform : [{translateX : -35}]
  },
  right : {
    width : 269,
    height : 400,
    borderWidth : 10,
    borderColor : "#EACC00",
    shadowOffset: { width: 20, height: 2 },
    shadowColor: "#EACC00",
    shadowOpacity: 1,
    elevation: 20,
    // background color must be set
    backgroundColor : "#0000",
    alignItems : "center",
      transform : [{translateX : 35}]
  },
  center : {
    width : 269,
    height : 490,
    borderWidth : 5,
    borderColor : "#EACC00",
    shadowOffset: { width: 20, height: 20 },
    shadowColor: "#EACC00",
    shadowOpacity: 1,
    elevation: 20,
    // background color must be set
    backgroundColor : "#0000",
    alignItems : "center",
  }
});



export default HomeScreen;

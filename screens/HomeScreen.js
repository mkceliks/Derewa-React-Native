import React from 'react';
import {Text,Button,View, SafeAreaView,StyleSheet,Image} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = () => {
    return  <View style={{alignItems: 'center',flex:1,marginTop:80}}>
    <Image
    style={{ width: 300, height: 200, backgroundColor:'white',marginBottom:20}}
    source={require('../assets/giphy.gif')}
    resizeMode='contain'
    
  />
    <View style={{justifyContent: 'center',alignItems: 'center'}}>
    <Text style={{textAlign:'center',fontSize:35,color:'black',fontWeight:'bold',fontFamily:'Roboto'}}>GLOBAL LEADER IN PROPERTY RESTORATION</Text>
</View>
</View>
  } 


export default Home;
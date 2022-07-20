import React from 'react';
import {Text,Button,View, SafeAreaView,StyleSheet,Image} from "react-native";

const GetHelpNow = () => {
    return <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
        <Text style={{textAlign:'center',fontSize:30,color:'#EC1B23',fontWeight:'bold',fontFamily:'Roboto'}}>GET HELP</Text>
        <Text style={{textAlign:'center',fontSize:30,color:'black',fontWeight:'bold',fontFamily:'Roboto'}}>24-Hour Emergency Hotline</Text>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Image
          style={{ width: 300, height: 150}}
          source={require('../assets/call.png')}
          resizeMode='contain'
          
        />
        </View>
    </View>
  }


export default GetHelpNow;
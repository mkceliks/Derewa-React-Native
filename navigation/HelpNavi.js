  
  import React from 'react';
  import {Text,Button,View, SafeAreaView,StyleSheet,Image} from "react-native";
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import Help from '../screens/HelpScreen'
  
  const Stack = createNativeStackNavigator();
  
  const HelpStack = () => {
    
    return(
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center',contentStyle:{
        backgroundColor:'#FFFFFF'
      }}} >
      <Stack.Screen name="Help" component={Help} options={{ 
       headerTitle: (props) => ( // App Logo
        <Image
          style={{ width: 200, height: 50 }}
          source={require('../assets/logo_1.png')}
          resizeMode='contain'
        />
      )
      }}/>
    </Stack.Navigator>
    );
  };

export default HelpStack;
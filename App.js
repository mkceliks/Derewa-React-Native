import React from 'react';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeStack from "./navigation/HomeNavi";
import ProfileStack from "./navigation/ProfileNavi";
import HelpStack from "./navigation/HelpNavi";
import LocaitonStack from "./navigation/LocationNavi";
import RecoveryStack from "./navigation/RecoveryNavi";


const Tabs = createBottomTabNavigator();


const App = () => {
  return <NavigationContainer theme={MyTheme}>
    <Tabs.Navigator screenOptions={{
      headerTitleAlign: 'center',
      tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 0,
        elevation: 0,
        height:70,
      },
      tabBarLabelStyle: {
        fontSize: 12,
       },  
    }} 
  sceneContainerStyle={{ backgroundColor: '#FFFFFF' }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} options={{
      tabBarIcon: (props) => <Ionicons name='home' {...props}/>,
      headerShown:false
      }}/>
      <Tabs.Screen name="GetHelpNow" component={HelpStack} options={{tabBarIcon: (props) => <Ionicons name='call' {...props}/>,
      headerShown:false,
      tabBarLabel : "Get Help Now",
    }}/>

      <Tabs.Screen name="Recovery" component={RecoveryStack} options={{tabBarIcon: (props) => <Ionicons name='information-circle' {...props}/>,
      headerShown:false,
      tabBarLabel: "Recovery Tips"
    }}/>
      <Tabs.Screen name="ProfileStack" component={ProfileStack} options={{
        headerShown:false,
        tabBarIcon: (props) => <Ionicons name='cog' {...props}/>,
        tabBarLabel: "Services"
      }}/>
      <Tabs.Screen name="Locations" component={LocaitonStack} options={{tabBarIcon: (props) => <Ionicons name='location' {...props}/>,
      headerShown:false,
      tabBarLabel: "Locations"
    }}/>
    </Tabs.Navigator>
         </NavigationContainer>
};
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0071BC',
  },
};

export default App;

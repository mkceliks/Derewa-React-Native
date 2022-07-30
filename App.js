import React from 'react';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeStack from "./navigation/HomeNavi";
import ProfileStack from "./navigation/ProfileNavi";
import HelpStack from "./navigation/HelpNavi";
import RecoveryStack from "./navigation/RecoveryNavi";
import LocationStack from './navigation/LocationNavi';


const Tabs = createBottomTabNavigator();


const App = () => {
  return <NavigationContainer theme={MyTheme}>
    <Tabs.Navigator screenOptions={{
      headerTitleAlign: 'center',
      tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 0,
        height:50,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom:3
       },  
    }} 
  sceneContainerStyle={{ backgroundColor: '#FFFFFF' }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} options={{
      tabBarIcon: (props) => <Ionicons name='home' {...props}/>,
      headerShown:false,
      tabBarLabel : "Home",
      }}/>
      <Tabs.Screen name="GetHelpNow" component={HelpStack} options={{tabBarIcon: (props) => <Ionicons name='information-circle' {...props}/>,
      headerShown:false,
      tabBarLabel : "Über uns",
    }}/>

      <Tabs.Screen name="RecoveryStack" component={RecoveryStack} options={{tabBarIcon: (props) => <Ionicons name='receipt' {...props}/>,
      headerShown:false,
      tabBarLabel: "Zertifikate"
    }}/>
      <Tabs.Screen name="ProfileStack" component={ProfileStack} options={{
        headerShown:false,
        tabBarIcon: (props) => <Ionicons name='cog' {...props}/>,
        tabBarLabel: "Leistungen"
      }}/>
      <Tabs.Screen name="Locations" component={LocationStack} options={{tabBarIcon: (props) => <Ionicons name='location' {...props}/>,
      headerShown:false,
      tabBarLabel: "Kontakt"
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

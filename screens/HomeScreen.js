import React,{useState, useCallback} from 'react';
import {Text,Button,View, SafeAreaView,StyleSheet,Image,ScrollView} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubePlayer from 'react-native-youtube-iframe';

const Home = () => {

    return  <ScrollView>
      
    <><Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginTop: 10 }}>

      "Wir für Sie - an Ihrer Seite"
      

    </Text><>
    <View style={{alignItems: 'center',flex:1}}>
    <Image
    style={{ width: 100, height: 100, backgroundColor:'white',marginBottom:5}}
    source={require('../assets/giphy.gif')}
    resizeMode='contain'
    
  />
  </View>
    <Text style={{  fontWeight: "bold", fontSize: 20 ,marginLeft:7,color:"#ED1C24"}}>

    Ihr Profi für Brand- und Wasserschäden

    </Text><>

    <Text style={{  fontSize: 20, marginTop: 10 ,marginLeft:7,color:"#2887C7"}}>

    Ein Mehrwert für Sie!

    </Text>

    <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10,marginLeft:7}}>

    Hervorragend auf verschiedene Bedürfnisse jedes einzelnen Schadens abgestimmt, liegt der Fokus auf Versicherungen, Versicherungsnehmer und Hausverwaltungen. Ein einheitliches System und transparente Schadenabwicklungen mit digitalen Möglichkeiten sind Basis der Unternehmensstrategie.

Wir bieten Ihnen ein umfangreiches und zuverlässiges Schadenmanagement. Unser eingespieltes Team mit langjähriger Erfahrung wird Sie bei der Abwicklung des Schadens von Anfang bis zum Ende begleiten. Durch den Einsatz modernster Technologien bieten wir Ihnen eine transparente und schnelle Schadenabwicklung.

    </Text>

    <Text style={{ textAlign:"center", fontSize: 20, marginTop: 10 ,marginLeft:7,color:"#2887C7"}}>

    Wasserschaden

</Text>

          <View style={styles.controlContainer}>

            <YoutubePlayer

              height={200}
              width={300}
              videoId={'fYQOhTGOjDQ'} />

          </View>
          
          <Text style={{ textAlign:"center", fontSize: 20 ,marginLeft:7,color:"#2887C7"}}>

          Brandschaden

</Text>
          <View style={styles.controlContainer}>

            <YoutubePlayer

              height={250}
              width={300}
              videoId={'qev71H1LBz4'} />


          </View>
{/* <Text style={{  fontWeight: "bold", fontSize: 20 ,marginLeft:7,color:"#ED1C24"}}>

Ein Mehrwert für Sie!

</Text><>

<Text style={{  fontSize: 20, marginTop: 10 ,marginLeft:7,color:"#2887C7"}}>

Service auf höchstem Niveau

</Text>

<Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10,marginLeft:7,marginBottom:100}}>

- 7 Tage 24 Stunden Notruf Hotline {"\n"}
- Schnelle Reaktionszeit{"\n"}
- Online-Zugriff auf die Baustellen Dokumente{"\n"}
- Hochwertiges Equipment „Made in Germany“{"\n"}
- 360° Aufnahmen{"\n"}
- Drohnenaufnahmen{"\n"}
- Online-Schadenmeldung{"\n"}
- Abwicklung aus einer Hand{"\n"}
- Hilfe durch Sofortmaßnahmen{"\n"}
- Digitale Schadenaufnahme{"\n"}

</Text> */}
          
          </></></>
        


          </ScrollView>  

  } 

  const styles = StyleSheet.create({

      container: {

        flex: 1,

        backgroundColor: 'darkblue',

      },

      controlContainer: {
 
        flexDirection: 'row',
   
        justifyContent: 'center',
        marginTop:20

      },

    });

export default Home;
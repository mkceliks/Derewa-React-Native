import React from 'react';
import {Text,Button,View, SafeAreaView,StyleSheet,Image,ScrollView} from "react-native";

const GetHelpNow = () => {
  
    return <ScrollView>
      
    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginTop: 10,color:"#ED1C24"}}>

    DEREWA GMBH
      

    </Text><>

    <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10,marginRight:10,marginLeft:10}}>

    Hervorragend auf verschiedene Bedürfnisse jedes einzelnen Schadens abgestimmt, liegt der Fokus auf Versicherungen, Versicherungsnehmer und Hausverwaltungen. Ein einheitliches System und transparente Schadenabwicklungen mit digitalen Möglichkeiten sind Basis der Unternehmensstrategie.

Wir bieten Ihnen ein umfangreiches und zuverlässiges Schadenmanagement. Unser eingespieltes Team mit langjähriger Erfahrung wird Sie bei der Abwicklung des Schadens von Anfang bis zum Ende begleiten. Durch den Einsatz modernster Technologien bieten wir Ihnen eine transparente und schnelle Schadenabwicklung.

    </Text></>
    <View style={{alignItems: 'center',flex:1}}>
    <Image
    style={{ width: 275, height: 200, backgroundColor:'white',marginTop:10,overflow: "hidden",borderRadius:10}}
    source={require('../assets/derewa-foto.jpg')}
    resizeMode='cover'
    
  />
  </View>

  <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10,marginRight:10,marginLeft:10}}>


  Als zukunftsorientiertes Unternehmen legen wir größten Wert auf Nachhaltigkeit. Umweltschutz ist für uns kein Ziel mehr, sondern längst eine Selbstverständlichkeit. Unser Equipment ist „Made in Germany“ und verspricht höchste Qualität. Wir arbeiten nach den aktuellsten gesetzlichen Richtlinien für die Brand- und Wasserschadensanierung. Deshalb arbeiten wir nicht nur mit regionalen Partnern eng zusammen, sondern binden auch Sie aktiv in den Prozess mit ein.

Wir legen großen Wert auf die Kommunikation mit Partnern und Kunden. Aus diesem Grund wird unser Team regelmäßig intern und extern geschult. Kooperationen mit der Berufsgenossenschaft, Geräteherstellern, Sachverständigenbüros und Laboren ermöglichen uns in vielen Bereichen eine stetige Weiterentwicklung.

</Text>

<View style={{alignItems: 'center',flex:1}}>
    <Image
    style={{ width: 275, height: 200, backgroundColor:'white',marginTop:10,overflow: "hidden",borderRadius:10}}
    source={require('../assets/derewa-foto-2.jpg')}
    resizeMode='cover'
    
  />
  </View>

  <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10,marginBottom:75,marginRight:10,marginLeft:10}}>


  Nach Abschluss der Baustelle haben Sie die Möglichkeit, unsere Handwerker und Projektleiter mittels Bewertungsschema auf der Abnahmeerklärung und Webseite Online zu bewerten. Das hilft uns, wichtige Schlüsse zu ziehen und uns weiterzuentwickeln.

Durch technisch fortschrittliche Maßnahmen, enge Kommunikation zwischen allen Beteiligten und einer strukturierten Arbeitsweise möchten wir unsere Position am Markt kontinuierlich verbessern.

Mit unserer Service-Hotline sind wir für Sie 7 Tage 24 Stunden erreichbar und einsatzbereit!

Profitieren Sie von unserem Fortschritt und holen Sie sich jetzt ein unverbindliches Angebot ein.

</Text>
    </ScrollView>
  }


export default GetHelpNow;
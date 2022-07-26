import  React,{ useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, NativeBaseProvider,Modal,Center,Button,FormControl,Input,Image } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";



const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImages1, setShowImages1] = useState(false);
  const [showImages2, setShowImages2] = useState(false);
  const [showImages3, setShowImages3] = useState(false);

  const [showModal2, setShowModal2] = useState(false);
  const [showImages_2_1, setShowImages_2_1] = useState(false);
  const [showImages_2_2, setShowImages_2_2] = useState(false);
  const [showImages_2_3, setShowImages_2_3] = useState(false);
  const [showImages_2_4, setShowImages_2_4] = useState(false);

  const [showModal3, setShowModal3] = useState(false);
  const [showImages_3_1, setShowImages_3_1] = useState(false);
  const [showImages_3_2, setShowImages_3_2] = useState(false);
  const [showImages_3_3, setShowImages_3_3] = useState(false);
  const [showImages_3_4, setShowImages_3_4] = useState(false);

  const [showModal4, setShowModal4] = useState(false);
  const [showImages_4_1, setShowImages_4_1] = useState(false);
  const [showImages_4_2, setShowImages_4_2] = useState(false);
  const [showImages_4_3, setShowImages_4_3] = useState(false);
  const [showImages_4_4, setShowImages_4_4] = useState(false);

  const [showModal5, setShowModal5] = useState(false);
  const [showImages_5_1, setShowImages_5_1] = useState(false);
  const [showImages_5_2, setShowImages_5_2] = useState(false);
  const [showImages_5_3, setShowImages_5_3] = useState(false);
  const [showImages_5_4, setShowImages_5_4] = useState(false);

  const [showModal6, setShowModal6] = useState(false);
  const [showImages_6_1, setShowImages_6_1] = useState(false);
  const [showImages_6_2, setShowImages_6_2] = useState(false);
  const [showImages_6_3, setShowImages_6_3] = useState(false);
  const [showImages_6_4, setShowImages_6_4] = useState(false);

  const [showModal7, setShowModal7] = useState(false);
  const [showImages_7_1, setShowImages_7_1] = useState(false);
  const [showImages_7_2, setShowImages_7_2] = useState(false);
  const [showImages_7_3, setShowImages_7_3] = useState(false);
  const [showImages_7_4, setShowImages_7_4] = useState(false);

  const [showModal8, setShowModal8] = useState(false);
  const [showImages_8_1, setShowImages_8_1] = useState(false);
  const [showImages_8_2, setShowImages_8_2] = useState(false);
  const [showImages_8_3, setShowImages_8_3] = useState(false);
  const [showImages_8_4, setShowImages_8_4] = useState(false);

  const [showModal9, setShowModal9] = useState(false);
  const [showImages_9_1, setShowImages_9_1] = useState(false);
  const [showImages_9_2, setShowImages_9_2] = useState(false);
  const [showImages_9_3, setShowImages_9_3] = useState(false);
  const [showImages_9_4, setShowImages_9_4] = useState(false);

  const [showModal10, setShowModal10] = useState(false);
  const [showImages_10_1, setShowImages_10_1] = useState(false);
  const [showImages_10_2, setShowImages_10_2] = useState(false);
  const [showImages_10_3, setShowImages_10_3] = useState(false);
  const [showImages_10_4, setShowImages_10_4] = useState(false);

  const [showModal11, setShowModal11] = useState(false);
  const [showImages_11_1, setShowImages_11_1] = useState(false);
  const [showImages_11_2, setShowImages_11_2] = useState(false);
  const [showImages_11_3, setShowImages_11_3] = useState(false);
  const [showImages_11_4, setShowImages_11_4] = useState(false);

  const [showModal12, setShowModal12] = useState(false);
  const [showImages_12_1, setShowImages_12_1] = useState(false);
  const [showImages_12_2, setShowImages_12_2] = useState(false);
  const [showImages_12_3, setShowImages_12_3] = useState(false);
  const [showImages_12_4, setShowImages_12_4] = useState(false);

  const [showModal13, setShowModal13] = useState(false);
  const [showImages_13_1, setShowImages_13_1] = useState(false);
  const [showImages_13_2, setShowImages_13_2] = useState(false);
  const [showImages_13_3, setShowImages_13_3] = useState(false);
  const [showImages_13_4, setShowImages_13_4] = useState(false);

    return <View style={{paddingTop: StatusBar.currentHeight,flexDirection:'row'}}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12" _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>

          <Text style={{width:150,textAlign:"center",color:"white",fontWeight:"bold",fontSize:20}}>Graffittientfernung</Text>
              <Center>
      <Button style={{width:150,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowModal(true)}>
        <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:13,borderStyle:"solid",borderWidth:1,borderColor:"white",borderRadius:10,padding:5}}>Click here for more info</Text>
        </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Graffittientfernung</Modal.Header>
          <Modal.Body>
            <Text>
 <Text style={{fontWeight:"bold"}}>Graffitis → </Text><Text>oft alles andere als Kunst!

Graffitis müssen schnell entfernt werden, da die Lacke unterschiedliche Auswirkungen auf die Gebäudeoberfläche haben können. Durch eine sofortige Behandlung werden Graffitis kostengünstiger entfernt. Um das geeignete Verfahren auszuwählen, müssen unsere Experten eine Besichtigung vornehmen. Anschließend werden die Verfahren nach Oberfläche und Stärke eingesetzt.

mechanische abrasive Methode = Sandstrahl oder Trockeneisstrahl

chemische Verfahren unter Berücksichtigung der bestehenden Umweltschutzgesetze</Text></Text>
{/* IMAGE --------->>>>    1 */}
<Text style={{textAlign:"center",fontWeight:"bold",fontSize:22}}>{"\n"}~{"\n"}Galerie</Text>
<Text>{"\n"}{"\n"}*Note : Touch the photos to zoom in.</Text>
<Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages1(true)}>

<Image 
          
          size={150}
          alt="foto1"
          source={require('../assets/graf-1.jpg')}
          resizeMode='contain'
        />
        </Button>

        <Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages2(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/graf-2.jpg')}
          resizeMode='contain'
        />
        </Button>

        <Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages3(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/graf-3.jpg')}
          resizeMode='contain'
        />
        </Button>
<Modal isOpen={showImages1} onClose={() => setShowImages1(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Graffittientfernung</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/graf-1.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages1(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages2} onClose={() => setShowImages2(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Graffittientfernung</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/graf-2.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages2(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages3} onClose={() => setShowImages3(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Graffittientfernung</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/graf-3.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages3(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {/* IMAGE --------->>>>    1 */}
    </Center>
            </Box>
            </View>














        <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12" _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>

          <Text style={{width:150,textAlign:"center",color:"white",fontWeight:"bold",fontSize:20}}>Strahlarbeiten</Text>
              <Center>
      <Button style={{width:150,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowModal2(true)}>
        <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:13,borderStyle:"solid",borderWidth:1,borderColor:"white",borderRadius:10,padding:5}}>Click here for more info</Text>
        </Button>
      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Strahlarbeiten</Modal.Header>
          <Modal.Body>
            <Text>
 <Text style={{fontWeight:"bold"}}>Wir behandeln Verunreinigung an Oberflächen mit einer reichen Anzahl an Strahlverfahren.

Die Strahlverfahren wirken in unterschiedlicher Stärke abrasiv auf die zu reinigende Oberfläche. Die Verfahren können bei Bedarf an jedem benötigten Ort eingesetzt werden (Korrosionsschutz, Graffitientfernung, Denkmalschutz, Strahlarbeiten, Fassadenreinigung etc.). Aus den Verfahren entstehen große Mengen an Strahlgut, die normgerecht wieder entsorgt werden.

Arbeits-, Sicherungs- und Schutzmaßnahmen werden bei allen Verfahren umgesetzt.</Text></Text>
{/* IMAGE --------->>>>    1 */}
<Text style={{textAlign:"center",fontWeight:"bold",fontSize:22}}>{"\n"}~{"\n"}Galerie</Text>
<Text>{"\n"}{"\n"}*Note : Touch the photos to zoom in.</Text>
<Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages_2_1(true)}>

<Image 
          
          size={150}
          alt="foto1"
          source={require('../assets/stras-1.jpg')}
          resizeMode='contain'
        />
        </Button>

        <Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages_2_2(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/stras-2.jpg')}
          resizeMode='contain'
        />
        </Button>

        <Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages_2_3(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/stras-3.jpg')}
          resizeMode='contain'
        />
        </Button>

        <Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages_2_4(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/stras-4.jpg')}
          resizeMode='contain'
        />
        </Button>
<Modal isOpen={showImages_2_1} onClose={() => setShowImages_2_1(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Strahlarbeiten</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/stras-1.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages_2_1(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages_2_2} onClose={() => setShowImages_2_2(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Strahlarbeiten</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/stras-2.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages_2_2(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages_2_3} onClose={() => setShowImages_2_3(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Strahlarbeiten</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/stras-3.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages_2_3(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages_2_4} onClose={() => setShowImages_2_4(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Strahlarbeiten</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/stras-4.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages_2_4(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowModal2(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {/* IMAGE --------->>>>    1 */}
    </Center>
            </Box>
            </View>























            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12" _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>

          <Text style={{width:150,textAlign:"center",color:"white",fontWeight:"bold",fontSize:20}}>Leckageortung</Text>
              <Center>
      <Button style={{width:150,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowModal3(true)}>
        <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:13,borderStyle:"solid",borderWidth:1,borderColor:"white",borderRadius:10,padding:5}}>Click here for more info</Text>
        </Button>
      <Modal isOpen={showModal3} onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Leckageortung</Modal.Header>
          <Modal.Body>
            <Text>
 <Text style={{fontWeight:"bold"}}>Kleine Leckagen an wasserführenden oder -ableitenden Leitungsrohren können einen erheblich großen Schaden anrichten. Sie sind oftmals mit bloßem Auge nicht zu erkennen. Häufig werden Leckagen an Rohren durch Feuchtespuren an Decken-, Wand- und Bodenflächen oder durch Druckabfall an dem Heizungs- oder Installationsnetz festgestellt.

Bereits ein kleines Leck mit 1mm Durchmesser kann einen hohen Schaden verursachen. Daher ist das Einsparpotential bei vorbeugender Ortung enorm hoch.

Wir verwenden vielfältige Messverfahren, um eine Leckage zu orten. Durch unser Know-How ermitteln wir den Ist-Zustand an den richtigen Stellen. Durch eine saubere Schadensaufnahme unserer Projektleiter, haben es die Installateure am Ende einfacher die Leckage zu schließen.</Text></Text>
{/* IMAGE --------->>>>    1 */}
<Text style={{textAlign:"center",fontWeight:"bold",fontSize:22}}>{"\n"}~{"\n"}Galerie</Text>
<Text>{"\n"}{"\n"}*Note : Touch the photos to zoom in.</Text>
<Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages_3_1(true)}>

<Image 
          
          size={150}
          alt="foto1"
          source={require('../assets/lacke-1.jpg')}
          resizeMode='contain'
        />
        </Button>

        <Button style={{width:220,backgroundColor:"rgba(255,0,0,0.0)",justifyContent:"center",textAlign:"center"}} onPress={() => setShowImages_3_2(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/lacke-2.jpg')}
          resizeMode='contain'
        />
        </Button>
<Modal isOpen={showImages_3_1} onClose={() => setShowImages_3_1(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Leckageortung</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/lacke-1.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages_3_1(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages_3_2} onClose={() => setShowImages_3_2(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Leckageortung</Modal.Header>
          <Modal.Body>

          <Image  size={250} alt="foto1"
          source={require('../assets/lacke-2.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages_3_2(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowModal3(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {/* IMAGE --------->>>>    1 */}
    </Center>
            </Box>
            </View>


















            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12"  _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
              This is a Box with Linear Gradient
            </Box>
            </View>

            <View style={styles.box}>
            <ImageBackground style={styles.inner} source={require('../assets/graffiti-1.png')}>
            <Box style={{backgroundColor:"transparent"}}>
              This is a Box with Linear Gradient
            </Box>
            </ImageBackground>
            </View>

            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12"  _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
              This is a Box with Linear Gradient
            </Box>
            </View>
            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12"  _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
              This is a Box with Linear Gradient
            </Box>
            </View>
            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12"  _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
              This is a Box with Linear Gradient
            </Box>
            </View>
            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12"  _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
              This is a Box with Linear Gradient
            </Box>
            </View>
            <View style={styles.box}>
        <Box style={styles.inner} bg={{
            linearGradient: {
              colors: ['red.500', 'blue.500'],
              start: [0.1],
              end: [1, 0],
            }
          }} p="12"  _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
              This is a Box with Linear Gradient
            </Box>
            </View>
            </View>
        </ScrollView>
      </View>
  };
  
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
      marginBottom:71
    },
    text: {
      fontSize: 42,
    },
    container: {
      width:"100%",
      height:"40%",
      padding: 5,
      flexDirection: 'row',
      flexWrap:'wrap',
    },
    box: {
      width: '50%',
      height:'50%',
      padding:5,
    },
    inner:{
      flex:1,
      backgroundColor:'transparent',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30
    }
  });
  
export default function Example() {
    return <NativeBaseProvider config={config}>
          <Profile />
      </NativeBaseProvider>;
  }
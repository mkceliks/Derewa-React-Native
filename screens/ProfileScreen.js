import  React,{ useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, NativeBaseProvider,Modal,Center,Button,FormControl,Input,Image } from 'native-base';



const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImages, setShowImages] = useState(false);
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
 <Text>Graffitis → oft alles andere als Kunst!

Graffitis müssen schnell entfernt werden, da die Lacke unterschiedliche Auswirkungen auf die Gebäudeoberfläche haben können. Durch eine sofortige Behandlung werden Graffitis kostengünstiger entfernt. Um das geeignete Verfahren auszuwählen, müssen unsere Experten eine Besichtigung vornehmen. Anschließend werden die Verfahren nach Oberfläche und Stärke eingesetzt.

mechanische abrasive Methode = Sandstrahl oder Trockeneisstrahl

chemische Verfahren unter Berücksichtigung der bestehenden Umweltschutzgesetze</Text>
<Button style={{width:150,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowImages(true)}>
<Image
          size={150}
          alt="foto1"
          source={require('../assets/graf-1.jpg')}
          resizeMode='contain'
        />
        </Button>
<Modal isOpen={showImages} onClose={() => setShowImages(false)}>
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
              setShowImages(false);
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
      backgroundColor:'#eee',
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
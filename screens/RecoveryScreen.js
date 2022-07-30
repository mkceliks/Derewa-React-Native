import  React,{ useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,ImageBackground} from 'react-native';
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Box, NativeBaseProvider,Modal,Center,Button,FormControl,Input,Image } from 'native-base';



const Recovery = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImages1, setShowImages1] = useState(false);
  const [showImages2, setShowImages2] = useState(false);
  const [showImages3, setShowImages3] = useState(false);
  const [showImages4, setShowImages4] = useState(false);
  const [showImages5, setShowImages5] = useState(false);

    return <ScrollView style={{marginBottom:55}}> 
      <><><><Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginTop: 10, color: "#2887C7" }}>

      ISO 9001:2015


    </Text><View style={styles.container}>
        <View style={styles.imageContainer}>
        <Button style={{width:175,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowImages1(true)}>
          <Image resizeMode='cover'
            alt="foto1"
            style={{ width: Dimensions.get('window').width / 2, height: 250 }}
            source={require("../assets/zert-1.jpg")} />
            </Button>
            <Button style={{width:175,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowImages2(true)}>
          <Image resizeMode='contain'
            alt="foto1"
            style={{ width: Dimensions.get('window').width / 2, height: 250 }}
            source={require("../assets/zert-2.jpg")} />
            </Button>
        </View>
      </View></><View style={styles.container}>
        <View style={styles.imageContainer}>
        <Button style={{width:175,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowImages3(true)}>
          <Image resizeMode='contain'
            alt="foto1"
            style={{ width: Dimensions.get('window').width / 2, height: 250 }}
            source={require("../assets/zert-3.jpg")} />
            </Button>
            <Button style={{width:175,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowImages4(true)}>
          <Image resizeMode='contain'
            alt="foto1"
            style={{ width: Dimensions.get('window').width / 2, height: 250 }}
            source={require("../assets/zert-4.jpg")} />
            </Button>
        </View>
      </View></>
        <View style={styles.imageContainer}>
        <Button style={{width:175,backgroundColor:"rgba(255,0,0,0.0)"}} onPress={() => setShowImages5(true)}>
          <Image resizeMode='contain'
            alt="foto1"
            style={{ width: Dimensions.get('window').width / 2, height: 250}}
            source={require("../assets/zert-5.png")} />
            </Button>
        </View></>

        <Modal isOpen={showImages1} onClose={() => setShowImages1(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Zertifikate</Modal.Header>
          <Modal.Body>

          <Image  size={350} alt="foto1"
          source={require('../assets/zert-1.jpg')}
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
          <Modal.Header>Zertifikate</Modal.Header>
          <Modal.Body>

          <Image  size={350} alt="foto1"
          source={require('../assets/zert-2.jpg')}
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
          <Modal.Header>Zertifikate</Modal.Header>
          <Modal.Body>

          <Image  size={350} alt="foto1"
          source={require('../assets/zert-3.jpg')}
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

      <Modal isOpen={showImages4} onClose={() => setShowImages4(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Zertifikate</Modal.Header>
          <Modal.Body>

          <Image  size={350} alt="foto1"
          source={require('../assets/zert-4.jpg')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages4(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>

      <Modal isOpen={showImages5} onClose={() => setShowImages5(false)}>
        <Modal.Content maxWidth="650px">
          <Modal.CloseButton />
          <Modal.Header>Zertifikate</Modal.Header>
          <Modal.Body>

          <Image  size={350} alt="foto1"
          source={require('../assets/zert-5.png')}
          resizeMode='cover'
        />
              </Modal.Body>
              <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowImages5(false);
            }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
              </Modal.Content>
      </Modal>
        </ScrollView>
      
      
}


const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,

    flexDirection: 'row',
  },
  image: {
    flex: 1,
  },
});


export default function Example() {
  return <NativeBaseProvider config={config}>
        <Recovery />
    </NativeBaseProvider>;
}
import React from 'react';
import { 
  StyleSheet, 
  View,
  Text, 
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import foto from './assets/WhatsAppImage.jpeg';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.page}>
          <View style={styles.container_header}> 
            <Image source={foto} style={styles.profilePicture} />
            <Text style={styles.name}>Bruno Bilheri Monteiro</Text>

            <View style={styles.information}>
              
            </View>

            <View style={styles.footer}> 
              <View style={styles.socialMidia}> 
                <Text>Linkedin</Text>
                <Text>Github</Text>
                <Text>WhatsApp</Text>
              </View>
            </View>
          </View>

        </View>


        <StatusBar />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  container_header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilePicture: {
    width: 150,
    height: 150,
    marginTop: 200,
    borderRadius: 125,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  socialMidia: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

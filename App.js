import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

import foto from './assets/WhatsAppImage.jpeg';

export default function App() {
  return (
    <>
      <View style={styles.page}>
        <View>
          <Image source={foto} style={styles.foto} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
});

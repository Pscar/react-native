import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function CatScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanidiplacido%2Ffiles%2F2018%2F01%2FMBA7020_v008.1028-1200x633.jpg" }}
        style={styles.image}
      />
      <Text style={styles.text}>Cat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 500
  },
  text: {
    paddingTop: 20
  }
})
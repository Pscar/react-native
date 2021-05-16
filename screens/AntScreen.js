import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function AntScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn3.movieweb.com/i/article/Oi0Q2edcVVhs4p1UivwyyseezFkHsq/738:50/Ant-Man-3-Talks-Michael-Douglas-Update.jpg" }}
        style={styles.image}
      />
      <Text style={styles.text}>Ant</Text>
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
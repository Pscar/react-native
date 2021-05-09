import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Ex1() {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  content: {
    backgroundColor: '#50E3C2',
    height: 116,
  }
});
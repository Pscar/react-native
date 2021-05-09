import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Ex6() {
  return (
    <View style={styles.container}>
      <View style={styles.content} />
      <View style={styles.content1} />
      <View style={styles.content2} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#50E3C2',
    width: 100,
    height: 100
  },
  content1: {
    backgroundColor: '#4A90E2',
    width: 100,
    height: 100
  },
  content2: {
    backgroundColor: '#9013FE',
    width: 100,
    height: 100
  }
})
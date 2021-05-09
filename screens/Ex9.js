import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Ex9() {
  return (
    <View style={styles.container}>
      <View style={styles.content} />
      <View style={styles.content1} />
      <View style={styles.content2} />
      <View style={styles.content3} />
      <View style={styles.content4} />
      <View style={styles.content5} />
      <View style={styles.content6} />
      <View style={styles.content7} />
      <View style={styles.content8} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'space-around'
  },
  content: {
    backgroundColor: '#50E3C2',
    width: 100,
    height: 100
  },
  content1: {
    backgroundColor: '#50E3C2',
    width: 100,
    height: 100
  },
  content2: {
    backgroundColor: '#50E3C2',
    width: 100,
    height: 100
  },
  content3: {
    backgroundColor: '#4A90E2',
    width: 100,
    height: 100
  },
  content4: {
    backgroundColor: '#4A90E2',
    width: 100,
    height: 100
  },
  content5: {
    backgroundColor: '#4A90E2',
    width: 100,
    height: 100
  },
  content6: {
    backgroundColor: '#9013FE',
    width: 100,
    height: 100
  },
  content7: {
    backgroundColor: '#9013FE',
    width: 100,
    height: 100
  },
  content8: {
    backgroundColor: '#9013FE',
    width: 100,
    height: 100
  },
})
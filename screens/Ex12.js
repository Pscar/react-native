import React from 'react'
import { StyleSheet, View } from 'react-native';

export default function Ex12() {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.content1}></View>
      <View style={styles.content2}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    backgroundColor: '#50E3C2',
    width: 100,
  },
  content1: {
    flex: 1,
    backgroundColor: '#4A90E2',
    width: 100,
  },
  content2: {
    flex: 1,
    backgroundColor: '#9013FE',
    width: 100,
  }
});
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Ex11() {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.content1}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    backgroundColor: '#4A90E2',
    height: 100,
  },
  content1: {
    flex: 1,
    backgroundColor: '#50E3C2',
    height: 100,
  }
});
import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Ex2() {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    backgroundColor: '#50E3C2',
    width: 100,
  }
});

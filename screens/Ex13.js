import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Ex13() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_row} />
        <View style={styles.header_rigth} />
        <View style={styles.header_left} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around'
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8BD7B1',
  },
  header_row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFEBB6',
  },
  header_rigth: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8BD7B1',
    width: 120
  },
  header_left: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FE706E',
  }
});
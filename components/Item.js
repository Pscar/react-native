import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Item({ item }) {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.logo}
      />
      <View style={styles.ViewText}>
        <Text style={styles.TextLable}>
          Title: {item.title}
        </Text>
        <Text style={{ fontSize: 15 }}>
          Release Year: {item.releaseYear}
        </Text>
      </View >
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  ViewText: {
    flex: 1,
    padding: 10
  },
  TextLable: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  logo: {
    width: 60,
    height: 60
  },
});
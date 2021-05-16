import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function FlexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Ex1')} >
        <Text style={{ padding: 10 }}>Ex1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex2')} >
        <Text style={{ padding: 10 }}>Ex2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex3')} >
        <Text style={{ padding: 10 }}>Ex3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex4')} >
        <Text style={{ padding: 10 }}>Ex4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex5')} >
        <Text style={{ padding: 10 }}>Ex5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex6')} >
        <Text style={{ padding: 10 }}>Ex6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex7')} >
        <Text style={{ padding: 10 }}>Ex7</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex8')} >
        <Text style={{ padding: 10 }}>Ex8</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex9')} >
        <Text style={{ padding: 10 }}>Ex9</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex10')} >
        <Text style={{ padding: 10 }}>Ex10</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex11')} >
        <Text style={{ padding: 10 }}>Ex11</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ex12')} >
        <Text style={{ padding: 10 }}>Ex12</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  fixToText: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    // marginBottom: 25,
    textAlign: "center"
  },
});
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="md-home" size={50} color="#848484" />
        <Text>Home Screen</Text>

      </View>
      <View style={styles.fixToText}>
        <Button
          onPress={() => navigation.navigate('SecondBottomTab')}
          title="Bmi / Movies"
          color=""
        />
        <Button
          onPress={() => navigation.navigate('ThreeBottomTab')}
          title="Three"
          color=""
        />
        <Button
          onPress={() => navigation.navigate('TodoTab')}
          title="TodoList"
          color=""
        />
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    textAlign: "center"
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('0');
  const [description, setDescription] = useState('');

  const compute = () => {
    console.log("Calculate button is pressed!!!");
    let output = (weight / (height / 100 * height / 100));
    setBmi(output.toFixed(2));

    let Description = "";
    if (output < 18.5)
      Description = "UNDERWEIGHT";
    else if (output >= 18.5 && output <= 24.99)
      Description = "NORMAL";
    else if (output >= 25 && output <= 29.99)
      Description = "OVERWEIGHT";
    else if (output >= 30 && output <= 39.99)
      Description = "OBESE";
    else if (output >= 40)
      Description = "EXTRENELY OBESE";

    setDescription(Description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Textlabal}>Weight (kgs) : </Text>
      <TextInput
        placeholder="enter your weight ..."
        keyboardType="numeric"
        style={styles.Text}
        value={weight}
        onChangeText={(text) => setWeight(text)}

      />
      <Text style={styles.Textlabal}>Height (cm) : </Text>
      <TextInput
        placeholder="enter your height ..."
        keyboardType="numeric"
        style={styles.Text}
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      <Text style={styles.Textlabal}>BMI : {bmi}</Text>

      <Button title="Calculate" onPress={compute} />
      <Text style={styles.Textlabal}>{description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  Textlabal: {
    fontSize: 30
  },
  Text: {
    marginBottom: 20
  },
});


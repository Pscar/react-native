import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Item from './Item';

export default function Movies({ navigation }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      let promise = await fetch('https://www.csbootstrap.com/api/movies');
      let data = await promise.json();
      // console.log("Data : ", data);
      setMovies(data);

    } catch (error) {
      console.log("ERROR : ", error);
    }
  }
  const clear = () => {
    setMovies([]);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={
          ({ item }) => {
            return (
              <Item item={item} />
            );
          }
        }
        keyExtractor={item => item.id}
      />
      <View style={styles.fixToText}>
        <Button
          title="Display Movies" onPress={getMovies}
        />
        <Button
          title="Clear" onPress={clear} color="#841584"
        />
        {/* <Button
          title="Create New Movies"
          onPress={() => navigation.navigate('CreateMovies')}
        /> */}
      </View>
    </View >
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
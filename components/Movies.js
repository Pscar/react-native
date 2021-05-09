import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Item from './Item';
export default function Movies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      let promise = await fetch('https://www.csbootstrap.com/movies.json');
      let data = await promise.json();
      console.log("Data : ", data);
      setMovies(data.movies);

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
      <Button title="Display Movies" onPress={getMovies} />
      <Button title="Clear" onPress={clear}  color="#841584" />
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40
  },
});
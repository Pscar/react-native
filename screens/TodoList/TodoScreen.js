import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TodoList from '../../components/TodoList';



export default function TodoScreen({ navigation }) {

  const [todos, setTodos] = useState([{ _id: '1', completed: false, title: "exercise @ 7.00" },
  { _id: '2', completed: false, title: "meeting @ 9.00" },
  { _id: '3', completed: false, title: "go to cinema @ 19.00" },
  ]);

  const writeTodos = async (object_value) => {
    try {
      const string_value = JSON.stringify(object_value)
      await AsyncStorage.setItem("@todos", string_value)
    } catch (e) {
      // saving error
    }
  }

  const readTodos = async () => {
    try {
      const string_value = await AsyncStorage.getItem("@todos")
      let todos = string_value != null ? JSON.parse(string_value) : [];
      setTodos(todos);
    } catch (e) {
      // error reading value
    }
  }

  const onCreate = () => {
    let new_data = {
      _id: '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
      title: "", //Empty String
      completed: false,
    };
    //CLONE ARRAY
    let new_todo = [...todos];
    //APPEND NEW DATA INTO ARRAY
    new_todo.push(new_data);
    //UPDATE STATE
    setTodos(new_todo);

    writeTodos(new_todo);
  };

  const onUpdate = (new_title, _id) => {
    //CLONE ARRAY FIRST
    let new_todo = [...todos];
    //Find index of specific object using findIndex method.   
    let index = new_todo.findIndex((item => item._id == _id));
    //Update object's name property.
    new_todo[index].title = new_title;
    //UPDATE STATE
    setTodos(new_todo);
    writeTodos(new_todo);
  };

  const onCheck = (_id) => {
    let new_todo = [...todos];
    let index = new_todo.findIndex((item => item._id == _id));
    //SET INVERSE VALUE BOOLEAN
    new_todo[index].completed = !new_todo[index].completed;
    setTodos(new_todo);
    writeTodos(new_todo);
  };

  const onDelete = (_id) => {
    //CLONE ARRAY FIRST
    let new_todo = [...todos];
    let index = new_todo.findIndex((item => item._id == _id));
    new_todo.splice(index, 1);
    setTodos(new_todo);
    writeTodos(new_todo);
  };

  useEffect(() => {
    readTodos();
  }, []);



  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TodoList
              item={item}
              onUpdate={onUpdate}
              onCheck={onCheck}
              onDelete={onDelete}
            />
          );
        }
        }
      />
      <TouchableOpacity
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          alignContent: "center",
          borderRadius: 25,
          position: 'absolute',
          right: 10,
          bottom: 10,
        }}
        onPress={onCreate}
      >
        <Ionicons name='md-add' size={26} />
      </TouchableOpacity>

    </View>

  )
}

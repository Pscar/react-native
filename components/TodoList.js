import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoList({ item, onCheck, onUpdate, onDelete }) {

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
      }}>
      <TouchableOpacity style={{ flex: 2 }} onPress={() => onCheck(item._id)}>
        <Ionicons name={item.completed ? "md-checkbox" : "md-square-outline"} size={23} />
      </TouchableOpacity>
      <View style={{ flex: 12 }}>
        <TextInput
          value={item.title}
          placeholder="What's in your mind? "
          onChangeText={(new_title) => onUpdate(new_title, item._id)}
        />
      </View>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => onDelete(item._id)}>
        <Ionicons name="md-trash" size={23} />
      </TouchableOpacity>
    </View>

  )
}

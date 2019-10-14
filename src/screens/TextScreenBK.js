import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () =>{
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      ></TextInput>
      <Text>My name is {name}</Text>
      {true ? <Text>That was true</Text>: null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
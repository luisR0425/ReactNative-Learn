import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () =>{
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      ></TextInput>
      {password.length < 4 ? <Text>password must be 4 characters</Text> : null}
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
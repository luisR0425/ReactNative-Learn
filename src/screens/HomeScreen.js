import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (/*props*/{ navigation }) => {
  //ver objeto
  //console.log(props.navigation);
  return (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Text')}
      title="Go to Text Demo"
    />
    <Button
      //onPress={() => console.log('Button pressed')}
      onPress={() => navigation.navigate('Box')}
      title="Go to Box Demo"
    />
    {/*<TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>*/}
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

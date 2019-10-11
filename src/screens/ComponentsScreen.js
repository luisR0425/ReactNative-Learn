import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//const ComponentsScreen = function() {
const ComponentsScreen = () => {
  //const greeting = 12345;
  //const greeting = ['asdsad','dadsd'];
  //const greeting = <Text>{['asdsad','dadsd']}</Text>
  const name = 'Luis';

  //return <Text style={{ fontSize: 30 }}>This is the components screen</Text>
  return (
    <View>
      {/*<Text style={styles.textStyle}>This is the components screen</Text>*/}
      {/*<Text>{greeting}</Text>*/}
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
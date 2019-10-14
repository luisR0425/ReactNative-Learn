import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    //alignItems: 'flex-start'
    //alignItems: 'center'
    //flexDirection: 'row',
    height: 200,
    //flexDirection: 'row' => child flex: 1
    //justifyContent: 'center'
    //justifyContent: 'space-around'
    //alignItems: 'center'
  },
  textOneStyle:{
    /*borderWidth: 10,
    //borderBottomWidth: 10,
    //borderTopWidth: 10,
    paddingTop: 10,
    paddingStart: 10,
    borderColor: 'red',
    /*marginVertical: 20,
    marginHorizontal: 20
    margin: 20*/
    borderWidth: 3,
    borderColor: 'red'
    //flex: 4
  },
  textTwoStyle:{
    borderWidth: 3,
    borderColor: 'red',
    //flex: 4
    //alignSelf: 'stretch'
    //top: 10,
    //bottom: 10,
    fontSize: 18,
    /*position:'absolute',|
    top: 0,               |
    right: 0,             |  == ...StyleSheet.absoluteFillObject
    bottom: 0,            |
    left: 0               |*/         
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle:{
    borderWidth: 3,
    borderColor: 'red'
    //flex: 2
  }
});

export default BoxScreen;
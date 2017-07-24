import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DrmoaHeader extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>마이닥터</Text>
      </View>
    );
  }
}

export default DrmoaHeader;

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 20,
    backgroundColor: '#25d0de',
    flexDirection: 'column-reverse'
  },

  text: {
    color: '#ffffff',
    fontSize: 18
  }
});

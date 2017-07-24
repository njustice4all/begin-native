import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FlexExample extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.text}>Left</Text>
        </View>
        <View style={styles.right}>
          <View style={styles.rightA}>
            <Text style={styles.text}>Right A</Text>
          </View>
          <View style={styles.rightB}>
            <Text style={styles.text}>Right B</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  left: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1,
    flexDirection: 'column'
  },

  rightA: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rightB: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

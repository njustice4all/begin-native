import React, { Component } from 'react';
import { View, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

class AlertExample extends Component {

  showAlert = () => {
    Alert.alert('this is alert...');
  }

  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.showAlert}
        >
          <Text>Alert</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AlertExample;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 100
  }
});

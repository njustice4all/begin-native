import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native';

class AsyncStorageExample extends Component {

  state = { name: '' }

  componentDidMount = () => {
    AsyncStorage.getItem('name').then((value) => {
      this.setState((prevState) => ({
        name: value
      }));
    });
  }

  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState((prevState) => ({
      name: value
    }));
  }

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        <Text>입력후 새로고침 localStorage와 비슷</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(value) => this.setName(value)}
        />
        <Text>{name}</Text>
      </View>
    );
  }
}

export default AsyncStorageExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },

  textInput: {
    margin: 15,
    height: 35,
    width: 100,
    borderWidth: 1,
    backgroundColor: '#7685ed'
  }
});

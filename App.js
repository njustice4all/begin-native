import React from 'react';
import { View, StyleSheet } from 'react-native';

import Home from './src/Home';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.view}>
        <Home />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});

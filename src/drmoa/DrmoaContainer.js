import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import DrmoaHeader from './DrmoaHeader';
import DrmoaTabs from './DrmoaTabs';

class DrmoaContainer extends Component {

  render() {
    return(
      <View style={styles.container}>
        <DrmoaHeader />
        <DrmoaTabs />
      </View>
    );
  }
}

export default DrmoaContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

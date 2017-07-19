import React, { Component } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   marginTop: 50
  },
  text: {
     fontSize: 30,
     color: 'red'
  }
});

class SwitchExample extends Component {

  state = { switchValue: false }

  toggleSwitch = () => {
    this.setState((prevState) => ({
      switchValue: !prevState.switchValue
    }));
  }

  render() {
    const { switchValue } = this.state;

    return (
      <View style={styles.container}>
        <Switch
          onValueChange={this.toggleSwitch}
          value={switchValue}
        />
        <Text style={styles.text}>
          {switchValue ? 'ON' : 'OFF'}
        </Text>
      </View>
    );
  }
}

export default SwitchExample;

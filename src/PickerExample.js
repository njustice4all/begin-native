import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

class PickerExample extends Component {

  state = { user: '' }

  updateUser = (user, index) => {
    this.setState((prevState) => ({
      user: user
    }));
  }

  render() {
    const { user } = this.state;

    return (
      <View style={{flex: 3}}>
        <Picker
          selectedValue={user}
          onValueChange={(user, index) => this.updateUser(user, index)}
        >
          <Picker.Item label="Steve" value="steve" />
          <Picker.Item label="Ellen" value="ellen" />
          <Picker.Item label="Maria" value="maria" />
        </Picker>

        <Text style={styles.text}>
          {user}
        </Text>
      </View>
    );
  }
}

export default PickerExample;

const styles = StyleSheet.create({
  text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
});

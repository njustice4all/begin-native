import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome Home !!'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello this is navigator</Text>
        <Button
          title="Chat with Lucy"
          onPress={() => navigate('Lucy', {
            user: 'young joo'
          })}
        />
      </View>
    );
  }
}

export default HomeScreen;

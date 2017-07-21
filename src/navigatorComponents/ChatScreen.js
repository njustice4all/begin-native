import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ChatScreen extends Component {

  static navigationOptions = {
    title: 'Chat with Lucy'
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Chat with Lucy</Text>
        <Text>and you are {params.user}</Text>
      </View>
    );
  }
}

export default ChatScreen;

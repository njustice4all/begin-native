import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { randomUsers } from './lib';

class FlatListExample extends PureComponent {

  state = {
    refreshing: false,
    data: randomUsers(20)
  };

  onEndReached = () => {
    this.setState((prevState) => ({
      data: [...prevState.data, ...randomUsers()]
    }));
  }

  onRefresh = () => {
    this.setState({
      data: randomUsers(20)
    });
  }

  render() {
    const { refreshing, data } = this.state;

    return (
      <List>
        <FlatList
          data={data}
          initialNumToRender={20}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached}
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          renderItem={({ item }) => {
            return (
              <ListItem
                roundAvatar
                avatar={{uri: item.avatar}}
                title={item.name}
              />
            );
          }}
        />
      </List>
    );
  }
}

export default FlatListExample;

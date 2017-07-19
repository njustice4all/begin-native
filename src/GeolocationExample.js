import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

class GeolocationExample extends Component {

  state = {
    initPosition: 'unknown',
    lastPosition: 'unknown'
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initPosition = JSON.stringify(position);
        this.setState((prevState) => ({
          initPosition: initPosition
        }));
      },
      (error) => {
        alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );

    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        const lastPosition = JSON.stringify(position);
        this.setState((prevState) => ({
          lastPosition: lastPosition
        }));
      },
      (error) => {
        alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  render() {
    const { initPosition, lastPosition } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>
          Initial Position
        </Text>
        <Text>
          {initPosition}
        </Text>
        <Text style={styles.boldText}>
          Current Position
        </Text>
        <Text>
          {lastPosition}
        </Text>
      </View>
    );
  }

  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  }

}

export default GeolocationExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },

  boldText: {
    fontSize: 50,
    color: 'red'
  }
});

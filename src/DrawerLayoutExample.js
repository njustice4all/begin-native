import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class DrawerLayoutExample extends Component {

  render() {
    const navigationView = (
      <View style={styles.navigationView}>
        <Text style={styles.text}>I'm in the drawer</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={() => navigationView}
        ref={(drawer) => this.drawer = drawer}
      >
        <View style={styles.innerView}>
          <Text style={styles.innerText}>Hello</Text>
          <Text style={styles.innerText}>왼쪽에서 swipe</Text>
          <Text style={styles.innerText}>or</Text>
          <Button
            onPress={() => this.drawer.openDrawer()}
            title="open drawer"
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default DrawerLayoutExample;

const styles = StyleSheet.create({
  navigationView: {
    flex: 1,
    backgroundColor: '#fff'
  },

  text: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left'
  },

  innerView: {
    flex: 1,
    alignItems: 'center'
  },

  innerText: {
    margin: 10,
    fontSize: 15,
    textAlign: 'right'
  }
});

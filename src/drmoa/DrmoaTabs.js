import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DrmoaTabs extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <View style={styles.icon} />
            <Text style={styles.text}>홈</Text>
          </View>
          <View style={styles.tab}>
            <View style={styles.icon} />
            <Text style={styles.text}>병원찾기</Text>
          </View>
          <View style={styles.tab}>
            <View style={styles.icon} />
            <Text style={styles.text}>이벤트</Text>
          </View>
          <View style={styles.tab}>
            <View style={styles.icon} />
            <Text style={styles.text}>건강정보</Text>
          </View>
          <View style={[styles.tab, styles.tabActive]}>
            <View style={styles.icon} />
            <Text style={styles.text}>마이닥터</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DrmoaTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },

  tabContainer: {
    height: 80,
    flexDirection: 'row'
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25d0de'
  },

  tabActive: {
    backgroundColor: '#f77777'
  },

  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    marginBottom: 5
  },

  text: {
    fontSize: 14,
    color: '#ffffff'
  }
});

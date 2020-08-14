/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import SafariView from 'react-native-safari-view';

export default class App extends Component {
  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <Text>Web browser</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

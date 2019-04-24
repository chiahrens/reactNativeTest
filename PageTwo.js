/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Button
} from "react-native";


type Props = {};
export default class PageTwo extends Component<Props> {

    static navigationOptions = {
        title: 'Page Two',
      };

  constructor(props) {
    super(props);
    this.state = { select: 'one' };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Text style={styles.welcome}>Page Two</Text>
        <Button
            title="Go to Home"
            accessibilityLabel="goToPageOne"
            testID="goToPageOne"
            onPress={() => navigate('Home')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

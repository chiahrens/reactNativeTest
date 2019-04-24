/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class Home extends Component<Props> {

    static navigationOptions = {
        title: 'Home',
      };

  constructor(props) {
    super(props);
    this.state = { select: 'one', select2: 'one' };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput
          style={styles.input}
          maxLength={40}
          accessible={true}
          accessibilityLabel="idCommon"
          testID="idCommon"
        />
        <Picker
          selectedValue={this.state.select}
          style={{ height: 50, width: 100 }}
          accessible={true}
          accessibilityLabel="numberSelect"
          testID="numberSelect"
          onValueChange={(itemValue, itemIndex) =>
            this.setState({select: itemValue})
          }
          mode="dialog">
          <Picker.Item label="One" value="one" accessible={true} />
          <Picker.Item label="Two" value="two" accessible={true} />
          <Picker.Item label="Three" value="three" accessible={true} />
        </Picker>
        <Picker
          selectedValue={this.state.select2}
          style={{ height: 50, width: 100 }}
          accessible={true}
          accessibilityLabel="numberSelect2"
          testID="numberSelect2"
          onValueChange={(itemValue, itemIndex) =>
            this.setState({select2: itemValue})
          }
          mode="dropdown">
          <Picker.Item label="One" value="one" accessible={true} />
          <Picker.Item label="Two" value="two" accessible={true} />
          <Picker.Item label="Three" value="three" accessible={true} />
        </Picker>

        <Button
            title="Go to Page Two"
            accessibilityLabel="goToPageTwo"
            testID="goToPageTwo"
            onPress={() => navigate('PageTwo')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    alignItems: "stretch",
    height: 36,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#48BBEC",
    backgroundColor: "white"
  }
});

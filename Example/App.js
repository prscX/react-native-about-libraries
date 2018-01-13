/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { AboutLibraries } from 'react-native-about-libraries'

import Avatar from './assets/avatar.png'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <AboutLibraries about={about} libraries={libraries} />
      </View>
    )
  }
}

let about = {
  avatar: Avatar,
  name: 'React Native',
  description: 'About Libraries Sample',
  version: 'Version 0.0.1'
}

// "dependencies": {
//   "react": "16.2.0",
//   "react-native": "0.52.0",
//   "react-native-about-libraries": "../"
// },
// "devDependencies": {
//   "babel-jest": "22.0.6",
//   "babel-preset-react-native": "4.0.0",
//   "jest": "22.0.6",
//   "react-test-renderer": "16.2.0",
//   "prettier-pack": "0.0.4"
// },

let libraries = [
  {
    name: 'ReactJS',
    description: `React is a JavaScript library for building user interfaces.
Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.`,
    creator: 'Facebook',
    license: 'MIT',
    version: '16.0.0',
    link: 'https://github.com/facebook/react'
  },
  {
    name: 'React Native',
    description: 'Facebook React Native',
    creator: 'Facebook',
    license: 'MIT',
    version: '0.52.0',
    link: 'https://github.com/facebook/react-native'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

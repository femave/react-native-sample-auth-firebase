'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNqh0CajqblL2ytCc8i-d-AWEfFgvfhVw',
      authDomain: 'react-native-auth-37d77.firebaseapp.com',
      databaseURL: 'https://react-native-auth-37d77.firebaseio.com',
      projectId: 'react-native-auth-37d77',
      storageBucket: 'react-native-auth-37d77.appspot.com',
      messagingSenderId: '171151047587'
    });
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  };
};

export default App;


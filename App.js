'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm/LoginForm'

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNqh0CajqblL2ytCc8i-d-AWEfFgvfhVw',
      authDomain: 'react-native-auth-37d77.firebaseapp.com',
      databaseURL: 'https://react-native-auth-37d77.firebaseio.com',
      projectId: 'react-native-auth-37d77',
      storageBucket: 'react-native-auth-37d77.appspot.com',
      messagingSenderId: '171151047587'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      }  else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="Large" />
    };
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  };
};

export default App;


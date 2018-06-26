import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from '../sections/Header'

class Home extends Component {
    render() {
        return (
            <View>
              <Text>Home</Text>
              <Header message = 'Press to Login' />
            </View>
        );
    }
}

export default Home;
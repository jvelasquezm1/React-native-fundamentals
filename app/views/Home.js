import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to Login' />
                <Hero />
                <Text style={{flex:6}}>Example</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});


export default Home;
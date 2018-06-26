import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../sections/Header'

export default class componentName extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Header message= 'Press to Login'/>
                <Text style={{flex:8}}>Contact form</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})

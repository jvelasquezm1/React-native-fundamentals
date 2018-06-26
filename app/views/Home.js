import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';
import { createStackNavigator } from 'react-navigation';

class Home extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message='Press to Login' />
                <Hero />
                <Menu navigate = {navigate}/>
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
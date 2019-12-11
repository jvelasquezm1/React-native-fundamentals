import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';

class Home extends Component<{ navigation?: any }> {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} message='Press to Login' />
                <Hero />
                <Menu navigation={this.props.navigation} />
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
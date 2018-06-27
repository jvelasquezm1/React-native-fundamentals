import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image, AsyncStorage, Alert } from 'react-native';

export class Header extends Component {

    state = {
        isLoggedIn: false,
        loggedUser: false
    };


    toogleUser = () => {
        if(this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                })
                Alert.alert('User logged out');
            });
        } else {
            this.props.navigate('LoginRT');
        }
    };

    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('NONE');
            } else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE')
                });
            } else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                })
            }
        });
    };
    
    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/logo.png')}
                    resizeMode='contain' />
                <Text
                    style={styles.headText}
                    onPress={this.toogleUser}>
                    {display}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 20
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'android' ? '#35605a' : '#31e981',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000'
    },
    logoStyle: {
        flex: 1,
        width: 50,
        height: 30,
    }
})

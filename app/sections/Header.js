import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    };

    toogleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn }
        })
    }
    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/logo.png')} 
                    resizeMode='contain'/>
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

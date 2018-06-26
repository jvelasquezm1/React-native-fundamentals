import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header';
import { createStackNavigator } from 'react-navigation';

export default class componentName extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        msg: 'Enter Message',
        name: 'Enter Name',
        email: 'Enter your Email Address'
    };

    clearFields = () => this.setState({ name: '', msg: '', email: '' });

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    };
    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to Login' />
                <Text style={styles.heading}>Contact form</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name} />
                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4} />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email} />
                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        textAlign: 'center'
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20,
        paddingLeft: 10,
        textAlign: 'center'
    },
    buttons:{
        marginTop: 15,
        fontSize: 16
    }
});

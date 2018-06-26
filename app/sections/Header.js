import React, { Component } from 'react';
import { Text } from 'react-native';

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
            <Text onPress={this.toogleUser}>
                {display}
            </Text>
        );
    }
}

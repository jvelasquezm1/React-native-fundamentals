import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import {questionSelected} from '../actions/quiz.action';

class Question extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        selected: false,
        correct: false
    };

    chooseAnswer = (ans, key) => {
        let worth = 14.28;
        this.props.dispatch(questionSelected(ans, key));
        if (ans === this.props.correctAnswer) {
            this.setState({
                selected: true,
                correct: true
            });
            this.props.scoreUpdate(0);
        } else {
            this.setState({
                selected: true
            });
            this.props.scoreUpdate(worth)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.selected && (
                    <View style={styles.container}>
                        <Text style={styles.questionText}> {this.props.question} </Text>
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer1', this.props.keys)}>
                            <Text style={styles.answerText}> {this.props.answer1} </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer2', this.props.keys)}>
                            <Text style={styles.answerText}> {this.props.answer2} </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer3', this.props.keys)}>
                            <Text style={styles.answerText}> {this.props.answer3} </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer4', this.props.keys)}>
                            <Text style={styles.answerText}> {this.props.answer4} </Text>
                        </TouchableHighlight>
                    </View>
                )}

                {this.state.selected && this.state.correct && (
                    <View style={styles.correctContainer}>
                        <Text style={styles.questionText}> {this.props.question} </Text>
                        <Text style={styles.answerText}> {this.props.answer1} </Text>
                        <Text style={styles.answerText}> {this.props.answer2} </Text>
                        <Text style={styles.answerText}> {this.props.answer3} </Text>
                        <Text style={styles.answerText}> {this.props.answer4} </Text>
                        <Text style={styles.answerText}> CORRECT </Text>
                    </View>
                )}

                {this.state.selected && !this.state.correct && (
                    <View style={styles.wrongContainer}>
                        <Text style={styles.questionText}> {this.props.question} </Text>
                        <Text style={styles.answerText}> {this.props.answer1} </Text>
                        <Text style={styles.answerText}> {this.props.answer2} </Text>
                        <Text style={styles.answerText}> {this.props.answer3} </Text>
                        <Text style={styles.answerText}> {this.props.answer4} </Text>
                        <Text style={styles.answerText}> INCORRECT </Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    correctContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#008000'
    },
    wrongContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#ff0000'
    },
    questionText: {
        flex: 2,
        padding: 15,
        fontSize: 20
    },
    answerText: {
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center'
    }
});

const mapStateToProps = () => {
    return { }
}

export default Question = connect(mapStateToProps)(Question);
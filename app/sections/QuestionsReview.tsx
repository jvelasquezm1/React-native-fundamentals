import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class QuestionsReview extends Component {

    static navigationOptions = {
        header: null
    };

    checkCorrectStyle = (answer) => {
        let styleCorrect = '';
        if (this.props.selectedAnswer === this.props.correctAnswer && this.props.selectedAnswer === answer) {
            styleCorrect = styles.correctAnswer
        } else if(this.props.correctAnswer === answer) {
            styleCorrect = styles.correctSelectedAnswer;
        } else if(this.props.selectedAnswer === answer && this.props.selectedAnswer !== this.props.correctAnswer) {
            styleCorrect = styles.wrongAnswer;
        } else {
            styleCorrect = styles.answerText;
        }
        return styleCorrect;
    };

    render() {
        console.log(this.props.selectedAnswer, '###', this.props.correctAnswer)
        return (
            <View style={styles.container}>
                <Text style={styles.questionText}> {this.props.question} </Text>
                <Text style={this.checkCorrectStyle('answer1')}> {this.props.answer1} </Text>
                <Text style={this.checkCorrectStyle('answer2')}> {this.props.answer2} </Text>
                <Text style={this.checkCorrectStyle('answer3')}> {this.props.answer3} </Text>
                <Text style={this.checkCorrectStyle('answer4')}> {this.props.answer4} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
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
    },
    correctAnswer: {
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#008000',
    },
    correctSelectedAnswer: {
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#8fbc8f',
    },
    wrongAnswer: {
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#8b0000',
    }
});

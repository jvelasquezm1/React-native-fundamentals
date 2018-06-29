import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";

class QuestionsReview extends Component {

    static navigationOptions = {
        header: null
    };

    checkCorrectStyle = (answer) => {
        let styleCorrect = '';
        this.props.correctAnswer === answer ? styleCorrect = styles.correctAnswer : styleCorrect = styles.answerText;
        return styleCorrect;
    }

    render() {
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
    }
});

const mapStateToProps = (state) => {
    return { selectedAnswer: state.quizReducer }
}

export default QuestionsReview = connect(mapStateToProps)(QuestionsReview);
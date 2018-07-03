import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import QuestionsReview from '../sections/QuestionsReview';
import { connect } from "react-redux";

class QuizFinish extends Component {

    static navigationOptions = {
        header: null
    };

    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT');
    };

    extend = (obj, src) => {
	    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
	    return obj;
	}

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - No score returned');
        let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions');
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions returned');
        let questionsReview = this.props.navigation.getParam('questionsReview', 'Error - No questions returned');
        let arrayAnswers = [];
        this.props.selectedAnswer.map((answer) => {
            questionsReview.map((element) => {
                if (answer.key === element.key) {
                    arrayAnswers.push(this.extend(answer, element));
                }
            })
        });
        return (
            <View style={styles.container}>
                <Text style={styles.questionText}> CORRECT ANSWERS </Text>
                <FlatList
                    data={arrayAnswers}
                    renderItem={({ item }) =>
                        <QuestionsReview
                            question={item.question}
                            answer1={item.answer1}
                            answer2={item.answer2}
                            answer3={item.answer3}
                            answer4={item.answer4}
                            correctAnswer={item.correctAnswer}
                            selectedAnswer={item.data}
                        />
                    }
                />
                <Text> Your quiz score was {userScore} </Text>
                <Text> You missed on {questionsMissed} out of {totalQuestions} questions </Text>
                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text> Finish Quiz </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});

const mapStateToProps = (state) => {
    return { selectedAnswer: state.quizReducer }
}

export default QuizFinish = connect(mapStateToProps)(QuizFinish);
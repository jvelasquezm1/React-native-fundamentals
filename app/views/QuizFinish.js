import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import QuestionsReview from '../sections/QuestionsReview';

export default class QuizFinish extends Component {

    static navigationOptions = {
        header: null
    };
    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT');
    }
    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - No score returned');
        let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions');
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions returned');
        let questionsReview = this.props.navigation.getParam('questionsReview', 'Error - No questions returned');
        return (
            <View style={styles.container}>
                <Text style={styles.questionText}> CORRECT ANSWERS </Text>
                <FlatList
                    data={questionsReview}
                    renderItem={({ item }) =>
                        <QuestionsReview
                            question={item.question}
                            answer1={item.answer1}
                            answer2={item.answer2}
                            answer3={item.answer3}
                            answer4={item.answer4}
                            correctAnswer={item.correctAnswer}
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

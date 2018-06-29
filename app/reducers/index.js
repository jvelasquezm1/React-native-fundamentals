import {combineReducers} from 'redux';
import {quizReducer} from './quiz.reducer';

export const rootReducer = combineReducers({quizReducer});
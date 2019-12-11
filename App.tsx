import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './app/views/Home';
import Contact from './app/views/Contact';
import { Video } from './app/views/Video';
import { VideoDetail } from './app/views/VideoDetail';
import Register from './app/views/Register';
import Login from './app/views/Login';
import Quiz from './app/views/Quiz';
import QuizFinish from './app/views/QuizFinish';
import { Blog } from './app/views/Blog';
import BlogDetail from './app/views/BlogDetail';
import About from './app/views/About';
import {rootReducer} from "./app/reducers/index";
const store = createStore(rootReducer)

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  QuizFinishRT: {
    screen: QuizFinish
  },
  BlogRT: {
    screen: Blog
  },
  BlogDetailRT: {
    screen: BlogDetail
  },
  AboutRT: {
    screen: About
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    );
  }
}

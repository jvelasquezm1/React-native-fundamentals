import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

export default class BlogDetail extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        postLoaded: false
    };

    componentDidMount() {
        let blogId = this.props.navigation.getParam('blogId', 'NO BLOG');
        return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts/${blogId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    postLoaded: true,
                    postTitle: responseJson.title,
                    postImage: responseJson.featured_image,
                    postContent: responseJson.content,
                    postID: responseJson.ID
                });
            })
            .catch((error) => {
                console.error(error, 'ERROR');
            });
    }

    goBack = () => {
        this.props.navigation.navigate('BlogRT');
    }


    render() {
        const blogTagStyles = {
            img: { display: 'none' },
        };

        const blogClassStyles = {
            blTitle: { marginLeft: 'auto', marginRight: 'auto' },
            blContent: { marginLeft: 10, marginRight: 10 },
            blBack: { marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20, }
        }

        let postDetails = `
      <div class="blTitle">
        <h1> ${this.state.postTitle}</h1>
      </div>
      
      <div class="blContent">
        ${this.state.postContent}
      </div>
      
      <div class="blBack">
        <a href=${this.state.postID} style="textDecorationLine: none; color: #0000">
            <h2>GO BACK</h2>
      </div>`;
        return (
            <View style={{ paddingTop: 30 }}>
                {this.state.postLoaded && (
                    <ScrollView>
                        <Image
                            style={{ width: '100%', height: 200 }}
                            source={{ uri: this.state.postImage }} />
                        <HTML
                            html={postDetails}
                            tagsStyles={blogTagStyles}
                            classesStyles={blogClassStyles}
                            onLinkPress={() => this.goBack()}
                        />
                    </ScrollView>
                )}
                {!this.state.postLoaded && (
                    <Text>
                        LOADING
                    </Text>
                )}
            </View>
        )
    }
}
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
// import HTML from 'react-native-render-html'

export class Blog extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        blogLoaded: false
    };

    componentDidMount() {
        return fetch('https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    blogLoaded: true,
                    blogList: Array.from(responseJson.posts)
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    chooseBlog = (blogID) => {
        this.props.navigation.navigate('BlogDetailRT', {blogId: blogID});
    }

    render() {
        return (
            <View>
                {this.state.blogLoaded && (
                    <View style={{ paddingTop: 40 }}>
                        <FlatList
                            data={this.state.blogList}
                            keyExtractor={(item, index) => item.ID.toString()}
                            renderItem={({ item }) =>
                                <BlogItem
                                    id={item.ID}
                                    title={item.title}
                                    imageSrc={item.featured_image}
                                    choosePost={this.chooseBlog} />} />
                    </View>
                )}

                {!this.state.blogLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <Text> LOADING </Text>
                    </View>
                )}
            </View>
        );
    }
}

export class BlogItem extends Component {

    blogChoice = () => {
        this.props.choosePost(this.props.id);
    }
    render() {
        let blogItems = `
        <a href=${this.props.id} style="textDecorationLine: none; color: #000; textAlign: center">
            <img src=${this.props.imageSrc} />
            <h1>${this.props.title}</h1>
            ${this.props.excerpt}
        </a>
        `;
        return (
            <View style={{borderBottomWidth: 2, borderBottomColor: '#000', borderStyle: 'solid'}}>
                <HTML html={blogItems} onLinkPress={()=>this.blogChoice()}/>
            </View>
        )
    }
}
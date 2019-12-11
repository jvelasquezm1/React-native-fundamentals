import React, { Component } from 'react';
import { Image, Text, StyleSheet, ScrollView } from 'react-native';

const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const whatGlobo = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`


export default class About extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        postLoaded: false
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/company.png')} />
                
                <Text style={styles.aboutTitle}>Who we are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/image.jpg')} />
                
                <Text style={styles.aboutTitle}>What we do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>

                <Text style={styles.backButton} onPress={()=> this.props.navigation.goBack()}>GO BACK</Text>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
      paddingTop: 20,
      paddingBottom: 30,
      backgroundColor: '#fff',
  },
  pics: {
      height: 300
  },
  aboutTitle: {
      paddingTop: 10,
      textAlign: 'center'
  },
  aboutText: {
      paddingBottom: 20,
  },
  backButton: {
      paddingBottom: 50,
      textAlign: 'center'
  }
});

import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './styles'

class Post extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={styles.postContainer}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
          }}>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('Post',{
                uri:`https://i.reddit.com${this.props.url}`
              })}
            >
              <Image source={this.props} style={{width: 140, height:140}}/>
            </TouchableHighlight>
          </View>

          <View style={styles.postDetails}>
            <Text>{this.props.date}</Text>
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={{flexDirection: 'row',}}>
              <Text>u/{this.props.author}</Text>
              <Text style={styles.red}>{this.props.score}</Text>
            </View>
            <Text># Comments:{this.props.comments}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Post;

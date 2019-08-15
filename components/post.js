import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight, WebView } from 'react-native'
import styles from './styles'

class Post extends Component{
  constructor(props) {
    super(props);
  }

  _onPress(){
    alert('Hey Dawg')
  }

  render(){
    //TODO: Style the elements
    //TODO: Link to the actual post with webView
    return(
      <View>
        <TouchableHighlight onPress={this._onPress}>
          <Image source={this.props} style={{width: 140, height:140}}/>
        </TouchableHighlight>
        <Text>{this.props.date}</Text>
        <Text style={styles.bigBlue}>{this.props.title}</Text>
        <Text>u/{this.props.author}</Text>
        <Text style={styles.red}>{this.props.score}</Text>
        <Text>Number of Comments:{this.props.comments}</Text>
      </View>
    )
  }
}

export default Post;

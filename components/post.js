import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight } from 'react-native'

class Post extends Component{
  constructor(props) {
    super(props);
  }

  _onPress(){
    alert('Hey Dawg')
  }

  render(){
    //TODO: Style the elements
    return(
      <View>
        <TouchableHighlight onPress={this._onPress}>
          <Image source={this.props} style={{width: 140, height:140}}/>
        </TouchableHighlight>
        <Text>{this.props.date}</Text>
        <Text>{this.props.title}</Text>
        <Text>u/{this.props.author}</Text>
        <Text>{this.props.score}</Text>
        <Text>Number of Comments:{this.props.comments}</Text>
      </View>
    )
  }
}

export default Post;

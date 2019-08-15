import React, { Component } from 'react';
import {View, Text, Image} from 'react-native'

class Post extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View>
        <Text>{this.props.author}</Text>
        <Image source={this.props} style={{width: 140, height:140}}/>
      </View>
    )
  }
}

export default Post;

import React, { Component } from 'react';
import Post from './post'
import {FlatList, Text} from "react-native";

class Posts extends Component{
  constructor(props){
    super(props)

    Posts.renderPost = Posts.renderPost.bind(this);
  }

  static renderPost(post){
    return(
      <Post/>
    )
  }

  render(){
    const { errpr, posts } = this.props;
      return (
        <Post/>
      )
    }
}

export default Posts;

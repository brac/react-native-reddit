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
      <Post
        key={post.key}
        uri={post.uri}
        url={post.url}
        epochTime={post.epochTime}
        title={post.title}
        author={post.author}
        score={post.score}
        num_comments={post.num_comments}
      />
    )
  }

  render(){
    const { errpr, posts } = this.props;
      return (
          posts.map((post) => {
            return (
              Posts.renderPost({
                key: post.key,
                uri: post.uri,
                url: post.url,
                epochTime: post.epochTime,
                title: post.title,
                author: post.author,
                score: post.score,
                num_comments: post.num_comments
              })
            )
        })
      )
    }
}

export default Posts;

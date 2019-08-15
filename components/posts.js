import React, { Component } from 'react';
import Post from './post'
import {FlatList, Image, Text, View} from "react-native";

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
        <FlatList
          data={posts}
          renderItem={({item}) =>
            <View>
              <Image source={posts} style={{width: 140, height: 140}}/>
              <Text>{item.date }</Text>
              <Text>{item.title}</Text>
              <Text>Author:{item.author}</Text>
              <Text>{item.score}</Text>
              <Text>Comments:{item.comments}</Text>
            </View>
          }
        />
      )
    }
}

export default Posts;




// Posts.renderPost({
//   key: post.key,
//   uri: post.uri,
//   url: post.url,
//   epochTime: post.epochTime,
//   title: post.title,
//   author: post.author,
//   score: post.score,
//   num_comments: post.num_comments
// })






//
// <FlatList
//   data={[this.props]}
//   renderItem={({item}) =>
//     <View>
//       <Text>{item.author}</Text>
//       <Image source={this.props} style={{width: 140, height:140}}/>
//     </View>
//   }
// />

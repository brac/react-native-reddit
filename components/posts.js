import React, { Component } from 'react';
import {FlatList, Image, Text, View, WebView} from 'react-native';
import Post from './post'


class Posts extends Component{
  constructor(props){
    super(props)
  }

  //TODO: Tap to navigate to link
  //TODO: Convert Epoch time to actual time
  render(){
    const { errpr, posts } = this.props;
      return (
        <FlatList
          style={{padding: 30 }}
          data={posts}
          renderItem={({item}) =>
            <View>
              <Post
                uri={item.uri}
                date={item.epochTime}
                title={item.title}
                author={item.author}
                score={item.score}
                comments={item.num_comments}
              />
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

import React, { Component } from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Post from './post'


class Posts extends Component{
  constructor(props){
    super(props)
  }

  //TODO: Tap to navigate to link
  //Need an onpress and to use the react native navigatin package
  //TODO: Convert Epoch time to actual time
  render(){
    const { posts } = this.props;

    return (
        <FlatList
          style={{padding: 30 }}
          data={posts}
          renderItem={({item}) =>
            <View>
              <Post
                uri={item.data.thumbnail}
                date={item.data.created}
                title={item.data.title}
                author={item.data.author}
                score={item.data.score}
                comments={item.data.num_comments}
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

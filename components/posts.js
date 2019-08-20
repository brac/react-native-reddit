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
  _keyExtractor = (item) => item.data.id;

  render(){
    const { posts, navigation } = this.props;

    return (
        <FlatList
          style={{padding: 25 }}
          data={posts}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <Post
              uri={item.data.thumbnail}
              date={item.data.created}
              title={item.data.title}
              author={item.data.author}
              score={item.data.score}
              comments={item.data.num_comments}
              navigation={navigation}
            />
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

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Post from './post'


class Posts extends Component{
  constructor(props){
    super(props)
  }

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
              url={item.data.permalink}
              navigation={navigation}
            />
          }
        />
      )
    }
}

export default Posts;

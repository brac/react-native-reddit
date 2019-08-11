import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';

const dummyData = [
  {
    key: '1',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  },
  {
    key: '2',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  },
  {
    key: '3',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  },
  {
    key: '4',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  },
  {
    key: '5',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  },
  {
    key: '6',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  },
  {
    key: '7',
    thumbnailUrl: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "jj-supreme",
    score: 362,
    num_comments: 33
  }
];

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { data: dummyData }
  }

  render() {
    return(
      <View style={{
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
      }}>
        <View style={{
          flex: 1,
          backgroundColor: 'skyblue',
        }}>
          <Text>ThumbNail</Text>
        </View>

        <View style={{
          flex: 3,
          backgroundColor: 'steelblue',
        }}>
          <Text>Details</Text>
        </View>
      </View>
    )
  }
}


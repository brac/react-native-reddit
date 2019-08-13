import React, { Component } from 'react';
import Posts from './components/posts'

const dummyData = [
  {
    _id: 1,
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
    _id: 2,
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
    _id: 3,
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
    _id: 4,
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
    _id: 5,
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
    _id: 6,
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
    _id: 7,
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

class App extends Component {
  constructor(props){
    super(props);

    this.state = { data: dummyData }
  }

  render() {
    return(
      <Posts
        posts={this.state.data}
      />
    )
  }
}

export default App;

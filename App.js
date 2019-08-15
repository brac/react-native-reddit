import React, { Component } from 'react';
import Posts from './components/posts'
import {Image, View} from "react-native";

const dummyData = [
  {
    _id: 1,
    key: '1',
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
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
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "bb-supreme",
    score: 362,
    num_comments: 33
  },
  {
    _id: 3,
    key: '3',
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "cc-supreme",
    score: 362,
    num_comments: 33
  },
  {
    _id: 4,
    key: '4',
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "vv-supreme",
    score: 362,
    num_comments: 33
  },
  {
    _id: 5,
    key: '5',
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "kk-supreme",
    score: 362,
    num_comments: 33
  },
  {
    _id: 6,
    key: '6',
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "ii-supreme",
    score: 362,
    num_comments: 33
  },
  {
    _id: 7,
    key: '7',
    uri: "https://b.thumbs.redditmedia.com/15COLIkopHlXEOiQ-Z1_LJi88gkYgCeBFHq8tLeNlOM.jpg",
    url: "https://i.redd.it/0kj97r5mjuf31.jpg",
    epochTime: 1565559488.0,
    title: "Underneath the Gateway Arch, St. Louis MO",
    author: "zz-supreme",
    score: 362,
    num_comments: 33
  }
];

//TODO: Write Loading
//TODO: Write Fetching

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: dummyData }
  }

  render() {
    return(
      <Posts posts={this.state.data} />
    )
  }
}

export default App;




// render(){
//   let pic = {
//     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//   };
//   return (
//     <Image source={pic} style={{width: 193, height: 110}}/>
//   );
// }

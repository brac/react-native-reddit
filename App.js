import React, { Component } from 'react';
import Posts from './components/posts'

//TODO: Write Loading

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  async getPosts(){
    try{
      let response = await fetch('https://api.reddit.com/r/pics/hot.json',)
      let responseJson = await response.json()

      this.setState({
        posts: responseJson.data.children,
        isLoading: false,
      })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    return(
      <Posts posts={this.state.posts} />
    )
  }
}

export default App;

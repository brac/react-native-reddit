import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Posts from './components/posts'

class PostScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.getParam('uri', 'https://www.reddit.com/r/pics/')}}
      />
    );
  }
}

class ViewScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    }
  }

  async getPosts(){
    try{
      let response = await fetch('https://api.reddit.com/r/pics/hot.json');
      let responseJson = await response.json();

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
      <Posts posts={this.state.posts} navigation={this.props.navigation}/>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: ViewScreen,
    },
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

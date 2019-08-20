import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Posts from './components/posts'

class HomeScreen extends React.Component {
  render() {
    return (
      <View >
        <ViewScreen
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

class PostScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Post Screen</Text>
      </View>
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
      <View>
        <Posts posts={this.state.posts} navigation={this.props.navigation}/>
      </View>

    )
  }
}


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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

import React, { Component } from 'react';
import {View, Text, FlatList, Image} from 'react-native'

class Post extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    //TODO: Get that image syntax figured ou
    console.log (this.props.uri)
    return(
      <View>
        <Image source={{uri: this.props.uri}}/>
        {/*<FlatList*/}
        {/*data={[this.props]}*/}
        {/*renderItem={({item}) =>*/}
          {/*<View>*/}
            {/*<Text>{item.author}</Text>*/}
            {/**/}
          {/*</View>*/}
        {/*}*/}
        {/*/>*/}
      </View>
    )
  }
}

export default Post;

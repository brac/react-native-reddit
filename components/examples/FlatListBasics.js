import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Leonard'},
            {key: 'Rudy'},
            {key: 'Jenna'},
            {key: 'Ben'},
            {key: 'Joan'},
            {key: 'Jeff'},
            {key: 'Rick'},
            {key: 'Vonnie'},
            {key: 'John'},
            {key: 'Julie'},
            {key: 'Jesse'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default styles;

// export default class LostOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigBlue}>just bigBlue</Text>
//         <Text style={[styles.bigBlue, styles.red]}>blueblue, then red</Text>
//         <Text style={[styles.red ,styles.bigBlue]}>red, then bigBlue</Text>
//       </View>
//     );
//   }
// }

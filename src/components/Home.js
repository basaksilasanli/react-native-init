import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { getPosts } from '../actions'

class Home extends Component {
  
  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ PostsResponse }) => {
  console.log('PostResponse:', PostsResponse)
  return { 
    posts: PostsResponse.posts
    
  }
};
export default connect(mapStateToProps,{ getPosts })(Home);
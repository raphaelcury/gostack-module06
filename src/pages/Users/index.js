import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default class Users extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };

  render() {
    const { route } = this.props;
    console.tron.log(route.params);
    return (
      <View>
        <Text>Users</Text>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

// import { Container } from './styles';

export default class Users extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.shape({ login: PropTypes.string.isRequired })
          .isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    starred: [],
  };

  async componentDidMount() {
    const { route } = this.props;
    const { login } = route.params.user;

    const response = await api.get(`/users/${login}/starred`);

    this.setState({ starred: response.data });
  }

  render() {
    return (
      <View>
        <Text>Users</Text>
      </View>
    );
  }
}

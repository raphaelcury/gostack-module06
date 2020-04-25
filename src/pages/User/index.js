import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container, Header, Avatar, Name, Bio } from './styles';

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
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  StarredList,
  StarredRepo,
  OwnerAvatar,
  RepoInfo,
  RepoName,
  OwnerLogin,
} from './styles';

export default class Users extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.shape({
          login: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          bio: PropTypes.string.isRequired,
        }).isRequired,
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
    const { starred } = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <StarredList
          data={starred}
          keyExtractor={(repo) => String(repo.id)}
          renderItem={({ item }) => (
            <StarredRepo>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <RepoInfo>
                <RepoName>{item.name}</RepoName>
                <OwnerLogin>{item.owner.login}</OwnerLogin>
              </RepoInfo>
            </StarredRepo>
          )}
        />
      </Container>
    );
  }
}

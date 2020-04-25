import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  ListContainer,
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
    loading: false,
    page: 1,
  };

  async componentDidMount() {
    const { route } = this.props;
    const { login } = route.params.user;
    this.setState({ loading: true });
    const response = await api.get(`/users/${login}/starred`, {
      params: {
        per_page: 10,
      },
    });
    this.setState({ starred: response.data, loading: false });
  }

  loadStarred = async () => {
    const { route } = this.props;
    const { login } = route.params.user;
    const { starred, page } = this.state;
    const newPage = page + 1;
    const response = await api.get(`/users/${login}/starred`, {
      params: {
        page: newPage,
        per_page: 10,
      },
    });
    this.setState({
      starred: [...starred, ...response.data],
      page: newPage,
    });
  };

  render() {
    const { route } = this.props;
    const { user } = route.params;
    const { starred, loading } = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <ListContainer>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <StarredList
              data={starred}
              keyExtractor={(repo) => String(repo.id)}
              onEndReachedThreshold={0.2}
              onEndReached={this.loadStarred}
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
          )}
        </ListContainer>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
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
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
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
    page: 0,
    refreshing: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await this.loadStarredList();
    this.setState({ loading: false });
  }

  loadStarredList = async (newPage = 1) => {
    const { route } = this.props;
    const { login } = route.params.user;
    const { starred } = this.state;
    const response = await api.get(`/users/${login}/starred`, {
      params: {
        page: newPage,
      },
    });
    this.setState({
      starred:
        newPage === 1 ? [...response.data] : [...starred, ...response.data],
      page: newPage,
    });
  };

  refreshStarredList = async () => {
    this.setState({ refreshing: true });
    await this.loadStarredList();
    this.setState({ refreshing: false });
  };

  nextListPage = async () => {
    const { page } = this.state;
    await this.loadStarredList(page + 1);
  };

  handleRepoPress = (repo) => {
    const { navigation } = this.props;
    navigation.navigate('Repo', { repo });
  };

  render() {
    const { route } = this.props;
    const { user } = route.params;
    const { starred, loading, refreshing } = this.state;

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
              onRefresh={this.refreshStarredList}
              refreshing={refreshing}
              data={starred}
              keyExtractor={(repo) => String(repo.id)}
              onEndReachedThreshold={0.2}
              onEndReached={this.nextListPage}
              renderItem={({ item }) => (
                <TouchableHighlight onPress={() => this.handleRepoPress(item)}>
                  <StarredRepo>
                    <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                    <RepoInfo>
                      <RepoName>{item.name}</RepoName>
                      <OwnerLogin>{item.owner.login}</OwnerLogin>
                    </RepoInfo>
                  </StarredRepo>
                </TouchableHighlight>
              )}
            />
          )}
        </ListContainer>
      </Container>
    );
  }
}

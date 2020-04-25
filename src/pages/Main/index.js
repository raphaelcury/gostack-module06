import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  handleAddButton = async () => {
    const { newUser, users } = this.state;
    this.setState({ loading: true });
    const { data } = await api.get(`/users/${newUser}`);
    const user = {
      name: data.name,
      login: data.login,
      bio: data.bio,
      avatar: data.avatar_url,
    };
    this.setState({ newUser: '', users: [...users, user], loading: false });
    Keyboard.dismiss();
  };

  render() {
    const { newUser, users, loading } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddButton}
          />
          <SubmitButton loading={loading} onPress={this.handleAddButton}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <List
          data={users}
          keyExtractor={(user) => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name} </Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => false}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

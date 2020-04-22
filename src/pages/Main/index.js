import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
  };

  handleAddButton = () => {
    console.tron.log(this.state.newUser);
  };

  render() {
    const { newUser } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
          />
          <SubmitButton onPress={this.handleAddButton}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

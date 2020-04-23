import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 0 15px;
  margin-right: 10px;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 12px;
`;

export const List = styled.FlatList``;

export const User = styled.View``;

export const Avatar = styled.View``;

export const Name = styled.View``;

export const Bio = styled.View``;

export const ProfileButton = styled.View``;

export const ProfileButtonText = styled.View``;

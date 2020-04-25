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
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px 0;
`;

export const User = styled.View`
  align-items: center;
  padding: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  margin-bottom: 5px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
`;

export const ProfileButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: #7159c1;
  height: 36px;
  border-radius: 4px;
  padding: 5px;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

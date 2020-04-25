import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  align-items: center;
  padding: 0 0 10px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  background: gray;
  border-radius: 50px;
  margin-bottom: 10px;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;
export const Bio = styled.Text`
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: gray;
`;

export const ListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StarredList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin-top: 20px;
`;
export const StarredRepo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  background: lightgray;
  border-radius: 5px;
  padding: 10px;
`;
export const OwnerAvatar = styled.Image`
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 20px;
  margin-right: 10px;
`;
export const RepoInfo = styled.View`
  width: 225px;
`;
export const RepoName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: #333;
`;
export const OwnerLogin = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const NextPageIndicator = styled.View`
  flex: 0.1;
`;

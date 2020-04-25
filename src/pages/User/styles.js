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

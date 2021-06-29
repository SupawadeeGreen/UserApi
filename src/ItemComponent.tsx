import React, {FC} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
type Props = {
  name: string;
  username: string;
  email: string;
  onDelete: () => void;
};
const ItemComponent: FC<Props> = ({name, username, email, onDelete}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{username}</Text>
      <Text>{email}</Text>
      <TouchableOpacity onPress={onDelete}>
        <DeleteText>Delete</DeleteText>
      </TouchableOpacity>
    </View>
  );
};

const View = styled.View`
  height: 130px;
  width: 80%;
  background-color: white;
  padding: 15px;
  margin: 10px 0px;
  border-radius: 13px;
`;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: red;
  padding: 5px;
  margin: 15px;
  border-radius: 5px;
  width: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const DeleteText = styled.Text`
  color: white;
`;

export default ItemComponent;

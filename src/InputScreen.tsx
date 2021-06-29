import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {Data} from './types/User';
import styled from 'styled-components/native';

const InputScreen = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const send = (inputData: Data) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        navigation.navigate('Home', data);
      })
      .catch(e => console.log(e));
  };

  return (
    <View>
      <TextInput
        onChangeText={str => setName(str)}
        value={name}
        placeholder="Name"
      />
      <TextInput
        onChangeText={str => setUserName(str)}
        value={userName}
        placeholder="User Name"
      />
      <TextInput
        onChangeText={str => setEmail(str)}
        value={email}
        placeholder="Email"
      />
      <Button
        title="SUBMIT"
        onPress={() => {
          send({name: name, username: userName, email: email});
        }}
      />
    </View>
  );
};

const View = styled.View`
  flex: 1;
  padding: 20px;
`;
const TextInput = styled.TextInput`
  border-radius: 13px;
  border-width: 1px;
  margin: 10px 5px;
  border-color: #505050;
  padding: 5px 10px;
`;
const Button = styled.Button`
  margin-top: 45px;
`;

export default InputScreen;

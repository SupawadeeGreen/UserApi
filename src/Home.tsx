import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {FAB} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import ItemComponent from './ItemComponent';
import {Data} from './types/User';
import styled from 'styled-components/native';

type ParamList = {
  MyData: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
};

const fetchData = (): Promise<Data[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((result: Data[]) => result);
};

const Home = () => {
  const [data, setData] = useState<Array<Data>>([]);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'MyData'>>();

  useEffect(() => {
    fetchData()
      .then(res => setData(res))
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if (route.params) {
      setData((current: Array<Data>) => [
        ...current,
        {
          id: data.length + 1,
          name: route.params?.name,
          username: route.params?.username,
          email: route.params?.email,
        },
      ]);
    }
  }, [data.length, route.params]);

  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item: Data) => (item?.id ? item.id.toString() : '')}
        renderItem={({item}) => {
          return (
            <ListView>
              <ItemComponent
                name={item.name}
                username={item.username}
                email={item.email}
                onDelete={() => {
                  const newData = data.filter(
                    (target: Data) => target.id !== item.id,
                  );
                  setData(newData);
                }}
              />
            </ListView>
          );
        }}
      />
      <FloatButtonStyle
        small
        icon="plus"
        onPress={() => navigation.navigate('InputScreen')}
      />
    </Screen>
  );
};

const Screen = styled.View`
  flex: 1;
`;
const ListView = styled.View`
  justify-content: center;
  align-items: center;
`;

const FloatButtonStyle = styled(FAB)`
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 0;
`;
export default Home;

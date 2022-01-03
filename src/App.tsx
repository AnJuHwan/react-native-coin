import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import CoinInfo from './components/CoinInfo';
import useFetch from './hooks/useFetch';

const LoadingText = styled.Text`
  font-size: 30px;
  color: #ff6600;
`;

const Cotainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: 95%;
`;

export default function App() {
  const [limit, setLimit] = useState<number>(3);
  const URL = `https://api.coinlore.net/api/tickers/?limit=${limit}`;
  const { data, error /*inProgress*/ } = useFetch(URL);

  const limitAdd = () => {
    setLimit(limit + 3);
  };

  return (
    <Cotainer>
      <List>
        {/* {inProgress && } */}
        {data ? (
          data?.data.map(({ symbol, name, price_usd }) => (
            <CoinInfo symbol={symbol} name={name} price_usd={price_usd} key={symbol} />
          ))
        ) : (
          <LoadingText>Loading...</LoadingText>
        )}
        {data && <Button title='더보기' onPress={limitAdd}></Button>}

        <StatusBar style='auto' />
      </List>
    </Cotainer>
  );
}

// simbol , name price-usd

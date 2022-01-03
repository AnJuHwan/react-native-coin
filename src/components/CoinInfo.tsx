import React from 'react';
import styled from 'styled-components/native';
import { ICoinData } from '../interface/Data';

const Container = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text<ITextBold>`
  font-size: 20px;
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
`;

const CoinInfo: React.FC<ICoinData> = ({ symbol, name, price_usd }) => {
  return (
    <Container>
      <StyledText>
        {symbol} ({name})
      </StyledText>
      <StyledText bold>
        $
        {Number(price_usd)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </StyledText>
    </Container>
  );
};

export default CoinInfo;
// 안드로이드에서는 toLocaleString() 적용 안되는 이슈 있음

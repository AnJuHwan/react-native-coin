export interface ICoinData {
  symbol: string;
  name: string;
  price_usd: number;
}

export interface ICoin {
  data: ICoinData[];
}

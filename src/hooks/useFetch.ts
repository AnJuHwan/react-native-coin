import { ICoin } from './../interface/data';
import { useEffect, useState, useCallback } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<ICoin>();
  const [error, setError] = useState<unknown>();
  // const [inProgress, setInProgress] = useState<boolean>(false);

  const getData = useCallback(async (): Promise<void> => {
    try {
      // setInProgress(true);
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      // setInProgress(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, error /*inProgress*/ };
};

export default useFetch;

/* eslint-disable no-unused-vars */
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import usePaging from './usePaging';

function useFetchData<D, T>(callback: (params: T) => Promise<AxiosResponse<D>>) {
  const [data, setData] = useState<D>();
  const [error, setError] = useState<AxiosResponse | null | void>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    paging,
    onPaging,
    goToFirstPage
  } = usePaging();
  async function getData(parameters: any) {
    try {
      setIsLoading(true);
      const response = await callback(parameters);

      if (response.data) {
        setData(response.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    const parameters = { ...paging };
    getData(parameters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paging]);

  return {
    data,
    error,
    isLoading,
    paging,
    getData,
    onPaging,
    goToFirstPage
  };
}

export default useFetchData;

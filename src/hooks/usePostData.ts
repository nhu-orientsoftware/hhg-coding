import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { REQUEST_STATUS } from '../constants';

function usePostData() {
  const [status, setStatus] = useState<string>(REQUEST_STATUS.REQUEST);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function postData(callback: Promise<AxiosResponse<any>>) {
    setStatus(REQUEST_STATUS.REQUEST);
    try {
      setIsLoading(true);
      const response = await callback;
      if (response.status === 201) {
        setIsLoading(false);
        setStatus(REQUEST_STATUS.SUCCESS);
      }
    } catch (err) {
      setIsLoading(false);
      setStatus(REQUEST_STATUS.ERROR);
    }
  }

  return {
    isLoading,
    postData,
    status
  };
}

export default usePostData;

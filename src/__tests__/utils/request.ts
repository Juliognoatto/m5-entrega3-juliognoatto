import axios, { AxiosResponse } from 'axios';

export const request = async (method: string, url: string, data?: any): Promise<AxiosResponse> => {
  try {
    return await axios({
      method,
      url,
      data
    });
  } catch (error: any) {
    if (error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};

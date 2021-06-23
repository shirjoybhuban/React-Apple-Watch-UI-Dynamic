import axios from 'axios';

export const fetcher = async (url) => {
  const data = await axios.get(url, {
    auth: {
      username: 'app_user',
      password: 'DreamMusic2020!',
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data;
};

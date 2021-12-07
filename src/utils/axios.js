/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import Cookies from 'js-cookie';

import setAuthTokens from '@/utils/setAuthTokens';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YmRmNWNjZC1lNWU1LTQ1ZWItOWNjNS05NWYxZjRhNjU0NGUiLCJlbWFpbCI6InNhbmRyb2RhdWRpc2h2aWxpQGxlYXZpbmdzdG9uZS5jb20iLCJnaXZlbl9uYW1lIjoic2FuZHJvIGRhdWRpc2h2aWxpIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJBZG1pbiIsImp0aSI6ImNiZWI5NmZhLTUwNzQtNGY3OS05MTU5LWY1ZTE2MTFlOTRiYyIsImV4cCI6MTYzODg3ODgxOH0.ZCSj59q0Zr0T3Adm_-2QmSxp3f2xqFV51biwHGh4fE0';

export const axiosRemote = axios.create({
  headers: {
    'Accept-Language': 'ka',
    Authorization: `Bearer ${token}`
  },
  timeout: 3000
});

const isUnauthorized = (error) => {
  try {
    return error.response.status === 401;
  } catch (e) {
    return false;
  }
};

const interceptors =
  (axiosInstance) =>
  ({ handleUnauthorized, refreshToken }) => {
    axiosInstance.interceptors.request.use((config) => {
      const token = Cookies.get('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (isUnauthorized(error) && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const tokenResponse = await refreshToken(Cookies.get('refreshToken'));
            setAuthTokens(tokenResponse.token, tokenResponse.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${tokenResponse.token}`;
          } catch (error) {
            handleUnauthorized();
            return Promise.reject(error);
          }
          return axiosRemote(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  };

export const enableInterceptors = interceptors(axiosRemote);

import { axiosRemote as axios } from '@/utils/axios';
import buildQuery from '@/utils/buildQuery';
import { handleError, handleSuccess } from './handler';

export const getMany = async (host, resource, query = {}, throwError = false) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`${host}/${resource}${buildQuery(query)}`)
      .then(handleSuccess(resolve, true))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({ items: [], total: 0 }))))
  );
};

export const getOne = async (host, resource, identificator, throwError = false) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`${host}/${resource}/${identificator}`)
      .then(handleSuccess(resolve))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({}))))
  );
};

export const get = async (host, resource, throwError = false) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`${host}/${resource}`)
      .then(handleSuccess(resolve))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({}))))
  );
};

export const getBlob = async (host, resource) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`${host}/${resource}`, {
        responseType: 'blob',
        timeout: 30000
      })
      .then(handleSuccess(resolve))
      .catch(handleError(reject))
  );
};

export const post = async (host, resource, payload) => {
  return new Promise((resolve, reject) =>
    axios.post(`${host}/${resource}`, payload).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const put = async (host, resource, payload, identificator) => {
  return new Promise((resolve, reject) =>
    axios
      .put(`${host}/${resource}${identificator ? `/${identificator}` : ''}`, payload)
      .then(handleSuccess(resolve))
      .catch(handleError(reject))
  );
};

export const del = async (host, resource, identificator) => {
  return new Promise((resolve, reject) =>
    axios
      .delete(`${host}/${resource}${identificator ? `/${identificator}` : ''}`)
      .then(handleSuccess(resolve))
      .catch(handleError(reject))
  );
};

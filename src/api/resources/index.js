import { getMany, getOne, post, put } from '@/api/dataProvider';
import { host } from '@/api/host';
import { config } from './config';

export const getResources = () => {
  return getMany(host.RESOURCES, config.resources, {}, false);
};

export const getResource = (key) => {
  return getOne(host.RESOURCES, config.resources, key);
};

export const updateResource = (payload, key) => {
  return put(host.RESOURCES, config.resources, payload, key);
};

export const createResource = (payload, key) => {
  return post(host.RESOURCES, `${config.resources}/${key}`, payload);
};

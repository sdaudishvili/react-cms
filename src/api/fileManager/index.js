import { getMany, post, del } from '@/api/dataProvider';
import { host } from '@/api/host';
import buildQuery from '@/utils/buildQuery';
import { config } from './config';

export const getDirectories = (options) => {
  return getMany(host.FM, config.directories, options);
};

export const createDirectory = (path) => {
  return post(host.FM, `${config.directories}/${buildQuery({ path })}`);
};

export const deleteDirectory = (path) => {
  return del(host.FM, `${config.directories}/${buildQuery({ path })}`);
};

export const getFiles = (options) => {
  return getMany(host.FM, config.files, options);
};

export const uploadFile = () => {
  // return post(host.FM, `${config.directories}/${buildQuery({ path })}`);
};

export const deleteFile = (path) => {
  return del(host.FM, `${config.files}/${buildQuery({ path })}`);
};

export const copyFile = () => {};
export const moveFile = () => {};
export const renameFile = () => {};

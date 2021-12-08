import { get } from '@/api/dataProvider';
import { host } from '@/api/host';
import { config } from './config';

export const getResources = () => {
  return get(host.RESOURCES, config.resources);
};

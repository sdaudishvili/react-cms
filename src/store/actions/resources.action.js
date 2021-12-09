import { getResources } from '@/api/resources';

export const SET_RESOURCES = 'SET_RESOURCES';

export const setResources = (payload) => {
  return {
    type: SET_RESOURCES,
    value: payload
  };
};

export const loadResources = () => async (dispatch) => {
  const res = await getResources();
  dispatch(setResources(res));
};

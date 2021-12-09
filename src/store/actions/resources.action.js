import { getResources, postResource, putResource } from '@/store/api/resources';

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

export const getResource = (key) => async () => {
  try {
    const res = await getResource(key);
    return res;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const createResource = (payload, key) => async () => {
  try {
    await postResource(payload, key);
  } catch (err) {
    console.log(err);
  }
};

export const updateResource = (payload, key) => async () => {
  try {
    await putResource(payload, key);
  } catch (err) {
    console.log(err);
  }
};

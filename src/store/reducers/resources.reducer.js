import { SET_RESOURCES } from '@/store/actions/resources.action';

const initialState = {
  resources: []
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return { ...state, resources: action.value };

    default: {
      return state;
    }
  }
};

export default baseReducer;

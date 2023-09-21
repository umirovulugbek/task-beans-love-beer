// import {get} from 'lodash';

const INITIAL_STATE = {
  refrashe: true,
  loading: false,
  baskets: [],
  theme: "",
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case "SET_BASKET":
      return {
        ...state,
        baskets: [...state.baskets, { id: action?.payload ?? 0, count: 1 }],
      };
    default:
      return state;
  }
};
export default reducers;

import { GET_ALL_SCHOOLS_SUCCESS } from "./actions";

const initialState = {
  data: [],
  fetching: false,
  error: null,
};

export type SchoolAction = {
  type: any;
  payload: {
    data: any[];
    fetching: boolean;
    error: boolean | null;
  };
}

export const reducer = (state = initialState, action: SchoolAction) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS_SUCCESS: {
      const {data, fetching, error} = action.payload;

      return {
        data,
        fetching,
        error,
      };
    }
    default:
      return state;
  }
};

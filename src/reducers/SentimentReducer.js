import { GET_SENTIMENT } from "../actions";

export default function (state = '', action) {
  switch (action.type) {
    case GET_SENTIMENT:
      return action.payload;
    default:
      return state;
  }
}

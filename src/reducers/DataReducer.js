import { GET_DATA } from "../actions";

export default function (state = '', action) {
    switch (action.type) {
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
}

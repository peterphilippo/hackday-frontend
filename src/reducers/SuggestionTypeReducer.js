import { EXPAND_SUGGESTION } from "../actions";

export default function (state = 'none', action) {
    switch (action.type) {
        case EXPAND_SUGGESTION:
            return action.payload;
        default:
            return state;
    }
}
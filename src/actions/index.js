import axios from 'axios';

export const EXPAND_SUGGESTION = 'EXPAND_SUGGESTION';
export const GET_DATA = 'GET_DATA';

const baseUrl = 'http://localhost:3030';

export function expandSuggestion(suggestionType) {
    return (dispatch) => {
        dispatch({ type: EXPAND_SUGGESTION, payload: suggestionType });
    };
}

export function getData() {
    console.log('zvao se get data');
    return (dispatch) => {
        axios.post(baseUrl + '/social', {
            keywords: 'trump',
        }).then((res) => {
            dispatch({ type: GET_DATA, payload: res })
        }).catch((err) => {
            console.log(err);
        });
    }
}
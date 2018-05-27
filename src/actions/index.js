import axios from 'axios';

export const EXPAND_SUGGESTION = 'EXPAND_SUGGESTION';
export const GET_DATA = 'GET_DATA';

const baseUrl = 'http://localhost:3030';

export function expandSuggestion(suggestionType) {
    return (dispatch) => {
        dispatch({ type: EXPAND_SUGGESTION, payload: suggestionType });
    };
}

export function getData(paragraphArr) {
    return (dispatch) => {
        console.log(paragraphArr);
        axios.post(baseUrl + '/keywords', {
            text: paragraphArr,
        }).then((res) => {
            let keywords = res.data.join(' ');
            let social = axios.post(baseUrl + '/social', {
                keywords: keywords,
            });
            let article = axios.post(baseUrl + '/article', {
                keywords: keywords,
            });
            let youtube = axios.post(baseUrl + '/youtube', {
                keywords: res.data,
            });
            Promise.all([social, article, youtube]).then((values) => {
                dispatch({ type: GET_DATA, payload: values })
                console.log(values);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }
}

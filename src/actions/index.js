import axios from 'axios';

export const EXPAND_SUGGESTION = 'EXPAND_SUGGESTION';
export const GET_DATA          = 'GET_DATA';
export const GET_SENTIMENT     = 'GET_SENTIMENT';

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
            let keywords = res.data;
            let social = axios.post(baseUrl + '/social', {
                keywords: keywords,
            });
            let article = axios.post(baseUrl + '/qwant', {
                keywords: keywords,
            });
            let youtube = axios.post(baseUrl + '/youtube', {
                keywords: keywords,
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

export function getSentiment(paragraphArr) {
  return (dispatch) => {
    console.log(paragraphArr);
    axios.post(baseUrl + '/sentiment', {
      text: paragraphArr,
    }).then((res) => {
      console.log(res.data, '-------------------sa0s7a089sa79s8a7');
      dispatch({
        type: GET_SENTIMENT,
        payload: res.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }
}

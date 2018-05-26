export const EXPAND_SUGGESTION = 'EXPAND_SUGGESTION';

export function expandSuggestion(suggestionType) {
    return (dispatch) => {
        dispatch({ type: EXPAND_SUGGESTION, payload: suggestionType });
    };
}
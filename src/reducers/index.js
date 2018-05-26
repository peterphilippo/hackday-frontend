import { combineReducers } from 'redux';

import SuggestionTypeReducer from './SuggestionTypeReducer';

const rootReducer = combineReducers({
    suggestionType: SuggestionTypeReducer,
});

export default rootReducer;
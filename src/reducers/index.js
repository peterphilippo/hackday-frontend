import { combineReducers } from 'redux';

import SuggestionTypeReducer from './SuggestionTypeReducer';
import DataReducer from './DataReducer';
import SentimentReducer from './SentimentReducer';

const rootReducer = combineReducers({
    suggestionType: SuggestionTypeReducer,
    sentimentPercentage: SentimentReducer,
    data: DataReducer,
});

export default rootReducer;

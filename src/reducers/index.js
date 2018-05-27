import { combineReducers } from 'redux';

import SuggestionTypeReducer from './SuggestionTypeReducer';
import DataReducer from './DataReducer';

const rootReducer = combineReducers({
    suggestionType: SuggestionTypeReducer,
    data: DataReducer,
});

export default rootReducer;
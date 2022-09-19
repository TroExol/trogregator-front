import DefaultState from './defaultState';

import {SET_IS_LOADING, MutateIsLoading} from './actions/setIsLoading';
import {SET_ERROR, MutateError} from './actions/setError';
import {SET_DATA, MutateData} from './actions/setData';
import {SET_SEARCH_TERM, MutateSearchTerm} from './actions/setSearchTerm';

const reducer = (state = DefaultState, {type, payload}) => {
    switch (type) {
        case SET_IS_LOADING:
            return MutateIsLoading(state, payload);

        case SET_ERROR:
            return MutateError(state, payload);

        case SET_DATA:
            return MutateData(state, payload);

        case SET_SEARCH_TERM:
            return MutateSearchTerm(state, payload);

        default:
            return state;
    }
};

export default reducer;
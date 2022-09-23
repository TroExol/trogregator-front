import Update from 'immutability-helper';
import {throttle} from 'lodash';

export const SET_SEARCH_TERM = Symbol('SET_SEARCH_TERM');

export const SetSearchTerm = data => ({
    type: SET_SEARCH_TERM,
    payload: data,
});

export default function UpdateSearchTerm(value) {
    return dispatch => {
        dispatch(SetSearchTerm(value));
        
        const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${value
            ? `?searchTerm=${value}`
            : ''}`;
        window.history.pushState({path: newUrl}, '', newUrl);
    };
};

export const MutateSearchTerm = (state, value) => {
    return Update(state, {
        searchTerm: {$set: value},
    });
};

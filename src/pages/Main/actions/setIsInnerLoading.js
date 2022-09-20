import Update from 'immutability-helper';

export const SET_IS_INNER_LOADING = Symbol('SET_IS_INNER_LOADING');

export const SetIsInnerLoading = data => ({
    type: SET_IS_INNER_LOADING,
    payload: data,
});

export const MutateIsInnerLoading = (state, value) => {
    return Update(state, {
        isInnerLoading: {$set: value},
    });
};

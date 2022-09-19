import Api from '../../../api';
import {SetIsLoading} from './setIsLoading';
import {SetError} from './setError';
import {SetData} from './setData';

// import mock from './mock';

const Fetch = () =>
    async (dispatch, getState) => {
        try {
            const {
                MainPage: {
                    searchTerm,
                }
            } = getState();
            
            dispatch(SetIsLoading(true));
            
            const {data, errors} = await Api.FetchSites(searchTerm);
            
            if (data) {
                dispatch(SetData(data));
                // dispatch(SetData(mock));
                dispatch(SetError(null));
            } else {
                dispatch(SetError(errors.errorMessage));
            }
            
            dispatch(SetIsLoading(false));
        } catch (error) {
            console.log(error);
            dispatch(SetData([]));
            dispatch(SetError('Произошла непредвиденная ошибка'));
            dispatch(SetIsLoading(false));
        }
    };

export default Fetch;
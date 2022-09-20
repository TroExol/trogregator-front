import Api from '../../../api';
import {SUPPORTED_SITES} from '../../../consts';
import {SetIsLoading} from './setIsLoading';
import {SetIsInnerLoading} from './setIsInnerLoading';
import {SetError} from './setError';
import {SetData} from './setData';

// import mock from './mock';

const Fetch = () =>
    async (dispatch, getState) => {
        try {
            const {
                MainPage: {
                    searchTerm,
                },
            } = getState();
            
            dispatch(SetIsLoading(true));
            dispatch(SetIsInnerLoading(true));
            
            const data = [];
            const delayedData = [];
            
            (await Promise.allSettled(SUPPORTED_SITES
                .map((siteName, index) =>
                    new Promise(async resolve => {
                        const {data: site, errors} = await Api.FetchSite(siteName, searchTerm);

                        if (errors) {
                            dispatch(SetError(errors.message));
                            return resolve();
                        }

                        if (!site?.items) {
                            return resolve();
                        }

                        if (!site.items?.length) {
                            delayedData.push(site);
                            return resolve();
                        }

                        data.push(site);
                        if (data.length % 3 === 0) {
                            dispatch(SetData(data));
                            dispatch(SetIsLoading(false));
                        }
                        resolve();
                    }),
                )));

            const newData = [...data, ...delayedData];
            // dispatch(SetData(mock));
            dispatch(SetData(newData));
            
            if (newData.length) {
                dispatch(SetError(null));
            }
            
            dispatch(SetIsLoading(false));
            dispatch(SetIsInnerLoading(false));
        } catch (error) {
            console.log(error);
            dispatch(SetData([]));
            dispatch(SetError('Произошла непредвиденная ошибка'));
            dispatch(SetIsLoading(false));
            dispatch(SetIsInnerLoading(false));
        }
    };

export default Fetch;
import DefaultState from './defaultState';

const connector = ({
    Main: {
        isLoading: isLoadingMain = false,
    },
    MainPage: {
        isLoading,
        error,
        data,
        searchTerm,
    } = DefaultState,
}) => ({
    isLoading: isLoading || isLoadingMain,
    error,
    data,
    searchTerm,
});

export default connector;
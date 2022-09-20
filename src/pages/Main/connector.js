import DefaultState from './defaultState';

const connector = ({
    Main: {
        isLoading: isLoadingMain = false,
    },
    MainPage: {
        isLoading,
        isInnerLoading,
        error,
        data,
        searchTerm,
    },
}) => ({
    isLoading: isLoading || isLoadingMain,
    isInnerLoading,
    error,
    data,
    searchTerm,
});

export default connector;
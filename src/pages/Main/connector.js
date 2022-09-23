const connector = ({
    MainPage: {
        isLoading,
        isInnerLoading,
        error,
        data,
        searchTerm,
    },
}) => ({
    isLoading,
    isInnerLoading,
    error,
    data,
    searchTerm,
});

export default connector;
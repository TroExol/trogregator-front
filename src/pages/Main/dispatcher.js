import Fetch from './actions/fetch';
import UpdateSearchTerm from './actions/setSearchTerm';

const dispatcher = dispatch => ({
    fetch: () => dispatch(Fetch()),
    updateSearchTerm: value => dispatch(UpdateSearchTerm(value)),
});

export default dispatcher;
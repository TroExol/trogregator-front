import withStyle from 'react-jss';

import Contacts from './Contacts.jsx';

const Style = {
    header: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
    },
};

export default withStyle(Style)(Contacts);

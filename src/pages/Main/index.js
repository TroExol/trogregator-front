import {connect} from 'react-redux';
import withStyle from 'react-jss';

import Main from './Main.jsx';

import connector from './connector';
import dispatcher from './dispatcher';

const Style = ({color: {secondaryDark}}) => ({
    alert: {
        marginTop: 15,
    },
    containerSearch: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '2rem auto',
    },
    containerSitesNavbar: {
        zIndex: 1,
    },
    containerInnerPreloader: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem 0',
    },
    containerPreloader: {
        color: '#fff',
        zIndex: 2,
    },
});

export default connect(connector, dispatcher)(withStyle(Style)(Main));

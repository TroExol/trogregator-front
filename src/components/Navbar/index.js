import {connect} from 'react-redux';
import withStyle from 'react-jss';

import Navbar from './Navbar.jsx';
import dispatcher from './dispatcher';

const Style = ({color: {light, secondaryDark}}) => ({
    container: {
        backgroundColor: secondaryDark,
        color: light,
        
        '& a': {
            color: light,
        },
        '& button': {
            color: light,
        },
    },
});

export default connect(null, dispatcher)(withStyle(Style)(Navbar));

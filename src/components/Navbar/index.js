import {connect} from 'react-redux';
import withStyle from 'react-jss';

import Navbar from './Navbar.jsx';
import dispatcher from './dispatcher';

const Style = ({color: {dark, secondary}}) => ({
    container: {
        backgroundColor: secondary,
        color: dark,
    }
});

export default connect(null, dispatcher)(withStyle(Style)(Navbar));

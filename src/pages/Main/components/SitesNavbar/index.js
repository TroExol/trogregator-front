import withStyle from 'react-jss';

import SitesNavbar from './SitesNavbar.jsx';

const Style = ({color: {dark, secondary}}) => ({
    container: {
        background: secondary,
        color: dark,
    },
    tab: {
        color: dark,
    },
    containerPreloader: {
        display: 'flex',
        justifyContent: 'center',
    }
});

export default withStyle(Style)(SitesNavbar);

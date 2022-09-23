import withStyle from 'react-jss';

import SiteCard from './SiteCard.jsx';

const Style = ({color: {dark, secondaryLight}}) => ({
    container: {
        backgroundColor: secondaryLight,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0.8rem 0',
        color: dark,
    },
    containerItems: {
        display: 'grid',
        marginTop: '1rem',
        gap: '1rem',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginBottom: '1rem',
    },
    more: {
        display: 'block',
        margin: '0 auto 0.7rem auto',
    },
    
    '@media screen and (max-width: 992px)': {
        containerItems: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    },
    '@media screen and (max-width: 576px)': {
        containerItems: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        }
    },
});

export default withStyle(Style)(SiteCard);

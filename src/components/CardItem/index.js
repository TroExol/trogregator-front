import withStyle from 'react-jss';

import CardItem from './CardItem.jsx';

const Style = {
    area: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    header: {
        '& span': {
            fontSize: '1rem',
            color: '#636363',
        },
    },
    content: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    image: ({imageUrl}) => ({
        height: 120,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl || '/'}), url('https://placehold.co/200x120/FFF/888/?text=x')`,
    }),
    title: {
        fontSize: '1.2rem',
        wordBreak: 'break-word',
    },
    containerPrice: {
        marginTop: 'auto',
    },
    price: {
        fontSize: '1.2rem',
    },
    oldPrice: {
        fontSize: '1rem',
        textDecoration: 'line-through',
    },
};

export default withStyle(Style)(CardItem);

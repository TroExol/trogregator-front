import React from 'react';

import {
    Container,
    Typography,
} from '@mui/material';

const Contacts = () => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="div">
                Контакты
            </Typography>
            <Container maxWidth="xs">
                <Typography variant="body1" gutterBottom>
                    Проект развивается в свободное от работы время.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {'Вопросы и предложения: '}
                    <a
                        href="https://t.me/troexol"
                        target="_blank">
                        Telegram
                    </a>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Поддержать: 5469 4900 1346 7085
                </Typography>
            </Container>
        </>
    );
};

export default Contacts;

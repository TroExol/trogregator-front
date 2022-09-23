import React from 'react';
import {
    Container,
    Paper,
    Skeleton,
    Stack,
} from '@mui/material';

const PreloaderSiteCards = ({
    classes,
}) => {
    return (
        <Stack>
            <Paper
                elevation={2}
                className={classes.container}>
                <div className={classes.title}>
                    <Skeleton
                        variant="text"
                        width={130}
                        height={40}/>
                </div>
                <Container
                    disableGutters
                    className={classes.containerItems}>
                    {[...Array(6)].map((_, index) => (
                        <Stack
                            key={index}
                            spacing={1}>
                            <Skeleton variant="text"/>
                            <Skeleton
                                variant="circular"
                                width={40}
                                height={40}/>
                            <Skeleton
                                variant="rectangular"
                                width={210}
                                height={118}/>
                        </Stack>
                    ))}
                </Container>
            </Paper>
        </Stack>
    );
};

export default PreloaderSiteCards;

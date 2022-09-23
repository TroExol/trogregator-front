import React, {memo} from 'react';
import {
    Button,
    Container,
    IconButton,
    Paper,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardItem from '../../../../components/CardItem';

const SiteCard = ({
    site: {
        siteName,
        urlMore,
        items,
    },
    
    classes,
}) => {
    return (
        <Paper
            id={siteName}
            elevation={2}
            className={classes.container}>
            <div className={classes.title}>
                <Typography
                    align="center"
                    variant="h4"
                    component="h2">
                    {siteName}
                </Typography>
                <IconButton onClick={() => window.open(urlMore, '_blank')}>
                    <SearchIcon/>
                </IconButton>
            </div>
            {items.length
                ? (
                    <Container
                        key={siteName}
                        disableGutters
                        className={classes.containerItems}>
                        {items?.map((item, index) => (
                            <CardItem
                                key={`${siteName}-${index}`}
                                siteName={siteName}
                                {...item}/>
                        ))}
                    </Container>
                )
                : (
                    <Typography align="center">
                        Ничего не найдено
                    </Typography>
                )}
            <Button
                className={classes.more}
                variant="outlined"
                onClick={() => window.open(urlMore, '_blank')}>
                Посмотреть на сайте
            </Button>
        </Paper>
    );
};

export default memo(SiteCard);

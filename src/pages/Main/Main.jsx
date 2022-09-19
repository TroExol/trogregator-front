import React, {useEffect, useRef} from 'react';
import {debounce} from 'lodash/function';
import './style.scss';
import {
    Alert,
    Container,
    CircularProgress,
    Card,
    CardContent,
    Typography,
    Backdrop, MenuItem, InputLabel, FormControl, TextField, Stack, Paper, Button, IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardItem from '../../components/CardItem';

const Main = ({
    isLoading,
    error,
    data,
    searchTerm,
    
    fetch,
    updateSearchTerm,
}) => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search).get('searchTerm');
        updateSearchTerm(urlParams || null);
        if (urlParams) {
            fetch();
        }
    }, []);
    
    const submit = event => {
        event.preventDefault();
        if (searchTerm) {
            fetch();
        }
    };
    
    return (
        <>
            {error && (
                <Alert
                    severity="error"
                    variant="outlined"
                    sx={{
                        marginTop: 2,
                    }}>
                    {error}
                </Alert>
            )}
            <Container className="main-container-search">
                <form onSubmit={submit}>
                    <TextField
                        label="Поиск"
                        placeholder="iPhone 13 pro..."
                        value={searchTerm || ''}
                        onChange={({target: {value}}) => updateSearchTerm(value)}/>
                    <IconButton
                        type="submit"
                        disabled={!searchTerm}
                        size="large">
                        <SearchIcon fontSize="inherit"/>
                    </IconButton>
                </form>
            </Container>
            {data.length
                ? (
                    <Stack spacing={6}>
                        {data.map(site => (
                            <Paper key={site.siteName}>
                                <div className="main-container-site-title">
                                    <Typography
                                        align="center"
                                        variant="h4"
                                        component="h2">
                                        {site.siteName}
                                    </Typography>
                                    <IconButton
                                        className="main-container-site-title-icon"
                                        onClick={() => window.open(site.urlMore, '_blank')}>
                                        <SearchIcon/>
                                    </IconButton>
                                </div>
                                {site.items.length
                                    ? (
                                        <Container
                                            key={site.siteName}
                                            disableGutters
                                            className="main-container">
                                            {site.items?.map((item, index) => (
                                                <CardItem
                                                    key={`${site.siteName}-${index}`}
                                                    siteName={site.siteName}
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
                                    className="main-container-more"
                                    variant="outlined"
                                    onClick={() => window.open(site.urlMore, '_blank')}>
                                    Посмотреть на сайте
                                </Button>
                            </Paper>
                        ))}
                    </Stack>
                )
                : (
                    <Typography
                        align="center"
                        variant="h5">
                        Ничего не найдено
                    </Typography>
                )}
            <Backdrop
                sx={{color: '#fff', zIndex: theme => theme.zIndex.drawer + 1}}
                open={isLoading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
};

export default Main;

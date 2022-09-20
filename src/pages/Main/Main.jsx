import React, {useEffect, useState} from 'react';
import './style.scss';
import {
    Alert,
    Container,
    CircularProgress,
    Typography,
    Backdrop,
    TextField,
    Stack,
    Paper,
    Button,
    IconButton,
    Box,
    Tab,
    Tabs,
    Skeleton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {StickyContainer, Sticky} from 'react-sticky';
import {scrollSpy, ScrollLink} from 'react-scroll';
import CardItem from '../../components/CardItem';

const ScrollTab = ScrollLink(Tab);

const Main = ({
    isLoading,
    isInnerLoading,
    error,
    data,
    searchTerm,
    
    fetch,
    updateSearchTerm,
}) => {
    useEffect(() => {
        scrollSpy.update();
        
        const urlParams = new URLSearchParams(window.location.search).get('searchTerm');
        updateSearchTerm(urlParams || null);
        if (urlParams) {
            fetch();
        }
    }, []);
    
    const [selectedSite, setSelectedSite] = useState(0);
    
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
            <StickyContainer>
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
                
                <Sticky>
                    {({style}) => (
                        <div
                            className="main-container-tabs"
                            style={style}>
                            {!isInnerLoading && !isLoading && !!data.length && (
                                <Tabs
                                    value={selectedSite}
                                    variant="scrollable"
                                    scrollButtons="auto">
                                    {data.map(({siteName}, index) => (
                                        <ScrollTab
                                            key={siteName}
                                            to={siteName}
                                            spy
                                            spyThrottle={500}
                                            offset={-48}
                                            smooth
                                            value={index}
                                            label={siteName}
                                            onSetActive={() => setSelectedSite(index)}/>
                                    ))}
                                </Tabs>
                            )}
                            {isInnerLoading && !isLoading && (
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <CircularProgress/>
                                </Box>
                            )}
                        </div>
                    )}
                </Sticky>
                
                {!isLoading
                    ? data.length
                        ? (
                            <Stack spacing={6}>
                                {data.map(site => (
                                    <Paper
                                        id={site.siteName}
                                        key={site.siteName}
                                        elevation={2}>
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
                        )
                    : (
                        <Stack spacing={6}>
                            <Paper elevation={2}>
                                <div className="main-container-site-title">
                                    <Skeleton
                                        variant="text"
                                        width={130}
                                        height={40}/>
                                </div>
                                <Container
                                    disableGutters
                                    className="main-container">
                                    {[...Array(6)].map((_, index) => (
                                        <Stack
                                            key={index}
                                            spacing={1}>
                                            <Skeleton variant="text"/>
                                            <Skeleton variant="circular" width={40} height={40}/>
                                            <Skeleton variant="rectangular" width={210} height={118}/>
                                        </Stack>
                                    ))}
                                </Container>
                            </Paper>
                        </Stack>
                    )}
                {isInnerLoading && !isLoading && (
                    <Box sx={{display: 'flex', justifyContent: 'center', margin: '15px 0'}}>
                        <CircularProgress/>
                    </Box>
                )}
                <Backdrop
                    sx={{color: '#fff', zIndex: theme => theme.zIndex.drawer + 1}}
                    open={isLoading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </StickyContainer>
        </>
    );
};

export default Main;

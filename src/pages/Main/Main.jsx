import React, {useEffect} from 'react';
import {Sticky, StickyContainer} from 'react-sticky';
import {scrollSpy} from 'react-scroll';
import {
    Alert,
    Container,
    CircularProgress,
    Typography,
    Backdrop,
    TextField,
    Stack,
    IconButton,
    Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SitesNavbar from './components/SitesNavbar';
import SiteCard from './components/SiteCard';
import PreloaderSiteCards from './components/PreloaderSiteCards';

const Main = ({
    isLoading,
    isInnerLoading,
    error,
    data,
    searchTerm,
    
    fetch,
    updateSearchTerm,
    
    classes,
}) => {
    useEffect(() => {
        scrollSpy.update();
        
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
                    className={classes.alert}
                    severity="error"
                    variant="outlined">
                    {error}
                </Alert>
            )}
            <StickyContainer>
                <Container className={classes.containerSearch}>
                    <form onSubmit={submit}>
                        <TextField
                            label="Поиск"
                            placeholder="iPhone 13 pro..."
                            value={searchTerm || ''}
                            disabled={isInnerLoading}
                            onChange={({target: {value}}) => updateSearchTerm(value)}/>
                        <IconButton
                            type="submit"
                            disabled={!searchTerm || isInnerLoading}
                            size="large">
                            <SearchIcon fontSize="inherit"/>
                        </IconButton>
                    </form>
                </Container>
                
                <Sticky>
                    {({style}) => (
                        <div
                            className={classes.containerSitesNavbar}
                            style={style}>
                            <SitesNavbar
                                isInnerLoading={isInnerLoading}
                                isLoading={isLoading}
                                siteList={data}/>
                        </div>
                    )}
                </Sticky>
                
                {!isLoading
                    ? data.length
                        ? (
                            <Stack spacing={6}>
                                {data.map(site => (
                                    <SiteCard
                                        key={site.siteName}
                                        site={site}/>
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
                        <PreloaderSiteCards/>
                    )
                }
                {isInnerLoading && !isLoading && (
                    <Box className={classes.containerInnerPreloader}>
                        <CircularProgress/>
                    </Box>
                )}
                <Backdrop
                    className={classes.containerPreloader}
                    open={isLoading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </StickyContainer>
        </>
    );
};

export default Main;

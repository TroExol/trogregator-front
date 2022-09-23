import React, {memo, useState} from 'react';
import {
    Box,
    CircularProgress,
    Tab,
    Tabs,
} from '@mui/material';
import {ScrollLink} from 'react-scroll';

const ScrollTab = ScrollLink(Tab);

const SitesNavbar = ({
    isInnerLoading,
    isLoading,
    siteList,
    
    classes,
}) => {
    const [selectedSite, setSelectedSite] = useState(0);
    
    return (
        <div className={classes.container}>
            {!isInnerLoading && !isLoading && !!siteList.length && (
                <Tabs
                    value={selectedSite}
                    variant="scrollable"
                    scrollButtons="auto">
                    {siteList.map(({siteName}, index) => (
                        <ScrollTab
                            key={siteName}
                            className={classes.tab}
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
                <Box className={classes.containerPreloader}>
                    <CircularProgress/>
                </Box>
            )}
        </div>
    );
};

export default memo(SitesNavbar);

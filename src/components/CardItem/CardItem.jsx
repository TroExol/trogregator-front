import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Typography,
} from '@mui/material';

const CardItem = ({
    name,
    url,
    price,
    oldPrice,
    siteName,
    
    classes,
}) => {
    const openItem = () => window.open(url, '_blank');
    
    return (
        <Card>
            <CardActionArea
                className={classes.area}
                onClick={openItem}>
                <CardHeader
                    className={classes.header}
                    title={siteName}/>
                <CardContent className={classes.content}>
                    <div className={classes.image}/>
                    <Typography
                        className={classes.title}
                        gutterBottom
                        component="div">
                        {name}
                    </Typography>
                    <div className={classes.containerPrice}>
                        {!!oldPrice && (
                            <Typography
                                className={classes.oldPrice}
                                color="text.secondary">
                                {oldPrice} ₽
                            </Typography>
                        )}
                        <Typography className={classes.price}>
                            {price ? `${price} ₽` : 'Цены нет'}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardItem;

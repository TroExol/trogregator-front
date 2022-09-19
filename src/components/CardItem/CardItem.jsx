import React from 'react';
import {
    Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography,
} from '@mui/material';
import './style.scss';

const CardItem = ({
    name,
    url,
    imageUrl,
    price,
    oldPrice,
    siteName,
}) => {
    return (
        <Card>
            <CardActionArea
                sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}
                onClick={() => window.open(url, '_blank')}>
                <CardHeader
                    className="card-item-header"
                    title={siteName}/>
                <CardContent>
                    <div
                        className="card-item-image"
                        style={{backgroundImage: `url(${imageUrl || '/'}), url('https://placehold.co/200x120/FFF/888/?text=x')`}}/>
                    <Typography
                        className="card-item-title"
                        gutterBottom
                        component="div">
                        {name}
                    </Typography>
                    {oldPrice
                        ? (
                            <Typography
                                className="card-item-old-price"
                                color="text.secondary">
                                {oldPrice} ₽
                            </Typography>
                        )
                        : null}
                    <Typography className="card-item-price">
                        {price ? `${price} ₽` : 'Цены нет'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardItem;

import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
import useStyles from '../styles';
import CardsData from './CardsData';
import { LocationOnOutlined } from '@material-ui/icons';

const Cards = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={4} justifyContent='center'>
                {
                    CardsData.map((page, index) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <CardActionArea>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={page.imageUrl}
                                        title="Random Image" />

                                    <CardContent className={classes.cardContent} align="left">
                                        <Typography variant="button" gutterbottom component="div">
                                            {page.CollegeName} {page.CollegeCity} {`(${page.AvailablePGs} PG's)`}
                                        </Typography>
                                        <LocationOnOutlined fontSize='small' style={{ color: 'green', display: 'inline-block', paddingTop: '5px' }} />
                                        <Typography variant="button" gutterbottom>
                                            {page.Country}
                                        </Typography>


                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Cards;
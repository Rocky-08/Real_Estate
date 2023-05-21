import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../styles';

const Heading = () => {
    const classes = useStyles();
    return (
        <>
            <div gutterbottom>
                <Typography variant="h4" className={classes.text} color="textSecondary" paragraph>
                    Best PG's Near Your Colleges
                </Typography>
            </div>
        </>
    )
}

export default Heading;
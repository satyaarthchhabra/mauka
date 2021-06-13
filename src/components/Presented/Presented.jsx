import React  from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from "react-elastic-carousel";
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    lightGrey: {
        color: theme.palette.common.lightGrey
    },
    rootElement: {
        marginTop: " 5rem ",
    },
    imageContainer: {
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
    }
}))
const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
]
const Presented = () => {
    const classes = useStyles();
    // eslint-disable-next-line no-array-constructor
    const uselessArray = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20");



    return (
        <>
            <Grid container direction="column" alignItems="center" className={classes.rootElement}  >

                <Typography variant="h2" color="gray" className={classes.lightGrey} >
                    Proudly Presented By
                </Typography>
                <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit quibusdam voluptas?
                </Typography>
                <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptas?
                </Typography>
                <Carousel itemsToScroll={1} className={classes.carousel} enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints} >
                    {
                        uselessArray.map((a, index) => (
                            <Grid item key={index} className={classes.imageContainer}>
                                <img src={`/asset/${index % 3 === 0 ? "Group 64.png" : index % 3 === 1 ? "Group 55.png" : "Group 39.png"}`} alt="carousel images " />
                            </Grid>

                        ))
                    }
            
                </Carousel>
            </Grid>
        </>
    )
}

export default Presented

import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import Carousel from "react-elastic-carousel";
import StarBorderIcon from '@material-ui/icons/StarBorder';
const useStyles = makeStyles(theme => ({
    parentContainer: {
        background: `url("/asset/Group 134.png") no-repeat left center`,
        backgroundSize: "25vw 100vh",

    },
    testimonialContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "3rem 0"
    },
    image: {
        borderRadius: "50%",
        width: "6rem",
        objectFit: "contain"
    },
    lightGrey: {
        color: theme.palette.common.lightGrey,
    },
    firstContainer: {
        marginBottom: "5rem"
    },
    subscribeBtn: {
        borderRadius: "18px",
        marginLeft: "20px"
    },
    newsletterContainer: {
        margin: "10rem  0",
    },
    mainText: {
        marginBottom: "3rem ",
    },
    inputContainer: {
        margin: "2rem 0",
    },
    
}))

const Newsletter = () => {
    const classes = useStyles();
    const uselessArray = ["1", "2", "3", "4"];

    return (
        <>
            <Grid container direction="column" align="center" justify="center" className={classes.parentContainer} >
                <Grid item className={classes.firstContainer}>
                    <Carousel itemsToScroll={1} enableAutoPlay autoPlaySpeed={1500} itemsToShow={1} >
                        {
                            uselessArray.map((a, index) => (
                                <Grid item key={index} className={classes.testimonialContainer}>
                                    <Typography variant="h1" color="primary">
                                        <img src="/asset/Group 86.png" alt="invertedComma" />
                                    </Typography>
                                    <img src="/asset/janeDoe.png" alt="jane doe" className={classes.image} />
                                    <Typography variant="h4" color="grey" className={classes.lightGrey}>
                                        Jane Doe
                                    </Typography>
                                    <Grid container justify="center" direction="row" >
                                        <StarBorderIcon color="primary" fontSize="large" />
                                        <StarBorderIcon color="primary" fontSize="large" />
                                        <StarBorderIcon color="primary" fontSize="large" />
                                        <StarBorderIcon color="primary" fontSize="large" />
                                    </Grid>
                                    <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit quibusdam voluptas?
                                    </Typography>
                                    <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptas?
                                    </Typography>
                                    <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                                        sit amet consectetur adipisicing elit. voluptas?
                                    </Typography>

                                </Grid>

                            ))
                        }

                    </Carousel>
                </Grid>
                {/* subscribe to newsletter section */}
                <Grid item className={classes.newsletterContainer} >
                    <Typography variant="h3" color="initial" className={`${classes.lightGrey} ${classes.mainText}`}>
                        Subscribe To Our Newsletter
                    </Typography>
                    <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit quibusdam voluptas?
                    </Typography>
                    <Typography variant="subtitle1" color="gray" className={classes.lightGrey} butterBottom  >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptas?
                    </Typography>
                    <Grid container justify="center" direction="row" className={classes.inputContainer} >
                        <TextField id="standard-required" color="primary" InputProps={{disableUnderline: true }}defaultValue="" />
                        <Button  variant="contained"  color="primary" size={"large"} className={classes.subscribeBtn} >
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Newsletter

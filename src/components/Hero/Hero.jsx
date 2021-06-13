import { Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(theme => ({
    greyText: {
        color: theme.palette.common.lightGrey
    },
    heroContainer: {
        height: '80vh',
        width: '83vw',
        margin: "10rem auto",
        marginBottom: "0",
    },
    // textContainer: {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    // },
    exploreButton: {
        color: theme.palette.common.white,
        width: "10rem",
        fontWeight: "600",
        height: "3rem",
    },
    mainText: {
        color: theme.palette.common.lightGrey,
        marginBottom: "1.5rem"
    },
    cushion: {
        marginBottom: "1.5rem"
    },
    
    flowerImage: {
        width: "18rem",
        height: "25rem",
        transform: " translateX(38%)",
    },
    logoImage: {
        border: "3px #00dbd0 solid",
        height: "15rem",
        width: "17rem",
        objectFit: "contain",

    }
}))

const Hero = () => {
    const classes = useStyles();
    return (
        <>

            <Grid container direction="row" justifyContent="center" className={classes.heroContainer}  >
                <Grid item className={classes.textContainer} >
                    <Typography variant="h4" color="initial" className={classes.greyText}>
                        Healhy life with
                    </Typography>
                    <Typography variant="h2" color="initial" className={classes.mainText}>
                        Nature Organic
                    </Typography>
                    <Typography variant="subtitle1" color="initial" className={classes.greyText} >
                        Vegetables are the edible parts of a plant
                    </Typography>
                    <Typography variant="subtitle1" color="initial" className={`${classes.greyText} ${classes.cushion}`} >
                        that is used in cooking or can be eaten now.
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.exploreButton}> Explore now</Button>

                </Grid>
                <Grid item className={classes.imageContainer}>
                    <Grid container direction="row" >
                        <img src="/asset/Group 195.png" className={classes.flowerImage} alt="flowers" />
                        <img src="/asset/Group 228.png" alt="logo big" className={classes.logoImage} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Hero

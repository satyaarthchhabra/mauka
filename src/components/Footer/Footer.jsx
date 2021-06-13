import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    footerContainer: {
        height: "50vh",
        background: `url("/asset/Group 229.png") no-repeat bottom center `,
        backgroundSize: "100vw 50vh",
    },
    footer: {
        width: "80vw",
        margin: "auto",
        height: "100%",
        padding: "5rem 0rem",
    },
    logo: {
        objectFit: "contain",
        width: "12rem",
        marginBottom: "1rem",
    },
    textDescription: {
        color: theme.palette.common.white
    },
    footerFirst: {
        width: "28%",
        color: theme.palette.common.white,
    },
    textCopyright: {
        color: theme.palette.common.white,
        marginTop: "revert",

    },
    heading: {
        marginBottom: "2.5rem"

    },
    subHeading: {
        lineHeight: "2"
    },
    rootIcon: {
        fontSize: "4rem"
    }
}))

const Footer = () => {
    let date = new Date();

    let year = date.getFullYear();
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.footerContainer}>

                <Grid container className={classes.footer} justify="space-between" alignItems="start" direction="row" >
                    <Grid item className={classes.footerFirst} >
                        <img src="/asset/Group 225.png" className={classes.logo} alt="logo" />
                        <Typography variant="subtitle1" className={classes.textDescription} color="textPrimary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta quis illo nob
                        </Typography>
                        <Typography variant="h6" className={classes.textCopyright} color="initial">
                            <CopyrightIcon />  {year} Nature
                        </Typography>
                    </Grid>
                    <Grid item className={classes.footerFirst} >
                        <Typography variant="h4" className={classes.heading} color="initial">Information</Typography>
                        <Grid container justify="space-between" direction="row" >
                            <Grid item>
                                <Typography variant="h6" className={classes.subHeading} color="initial">
                                    About Us
                                </Typography>
                                <Typography variant="h6" className={classes.subHeading} color="initial">
                                    Products
                                </Typography>
                                <Typography variant="h6" className={classes.subHeading} color="initial">
                                    Contact Us
                                </Typography>
                                <Typography variant="h6" className={classes.subHeading} color="initial">
                                    Term of Service
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" className={classes.subHeading} color="initial">
                                    About us
                                </Typography>
                                <Typography variant="h6" className={classes.subHeading} color="initial">
                                    Products
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.footerFirst} >
                        <Typography variant="h4" className={classes.heading} color="initial">Follow Us</Typography>
                        <Grid container justify="space-between" direction="row" >
                            <FacebookIcon fontSize="large" className={classes.rootIcon} />
                            <LinkedInIcon fontSize="large"  className={classes.rootIcon}/>
                            <InstagramIcon fontSize="large" className={classes.rootIcon} />
                            <TwitterIcon fontSize="large"  className={classes.rootIcon} />
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
        </>
    )
}

export default Footer
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Button,  Tab, Tabs, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Toolbar: {
        maxWidth: "90vw",
    },
    tabContainer: {
        marginLeft: "auto",
    },
    logoContainer: {
        marginLeft: "auto",
    },
    AppBar: {
        backgroundColor: "none",
        marginBottom:"1.5rem",
    },
    button: {
        borderRadius: "0.5rem",
        borderWidth: "2px",
        borderColor: theme.palette.primary.main,
    },
    seletedTab: {
        borderBottom: "2px #00dbd0 solid",
    },

}))

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" elevation={0} color="transparent" className={classes.AppBar} alignItems="center" justifyContent="center">
                <Toolbar className={classes.Toolbar} disableGutters>

                    <Button onClick={() => { }} className={classes.logoContainer} disableRipple>
                        <img className={classes.img__width} src={`./asset/Group 220.png`} alt="company logo " />
                        <Typography variant="h4" className={classes.logoTypography}>
                            ORGANIC
                        </Typography>
                    </Button>
                    <Tabs indicatorColor="secondary" className={classes.tabContainer}   >
                        <Tab label="home" disableRipple className={`${classes.seletedTab}`} />
                        <Tab label="products" disableRipple className={classes.navTabs} />
                        <Tab label="blog" disableRipple className={classes.navTabs} />
                        <Tab label="about us " disableRipple className={classes.navTabs} />
                    </Tabs>
                    <Button variant="outlined" className={classes.button} >
                        contact
                    </Button>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Header


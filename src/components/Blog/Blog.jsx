import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    lightGrey: {
        color: theme.palette.common.lightGrey
    },
    cardContainer: {
        width: "75vw",
        margin: "3rem 0",
    },
    card: {
        width: "20vw",
        boxShadow: "none",
        borderRadius: "10px"
    },
    cardImage: {
        height: "40vh",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    readMore: {
        height: "3rem",
        width: "fit-content",
        borderBottom: "3px solid #00dbd0"
    }

}))

const Blog = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container direction="column" alignItems="center" >
                <Typography variant="h1" color="primary">
                    <img src="/asset/Group 114.png" alt="leaf" />
                </Typography>
                <Typography variant="h3" color="gray" className={classes.lightGrey} >
                    Read Our Blog
                </Typography>
                <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit quibusdam voluptas?
                </Typography>
                <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptas?
                </Typography>
                <Grid container direction="row" justify="space-between" alignItems="center" className={classes.cardContainer} >
                    <Grid item>
                        <Card className={classes.card}>
                            
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/asset/imageBottle.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography align="center" gutterBottom variant="h5" color="primary" component="h2">
                                        Blog Post One
                                    </Typography>
                                    <Typography variant="body2" align="center" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    <Button variant="text" elevation={0} classes={{label:classes.lightGrey}} className={classes.readMore} color="default">
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/asset/imageHandwash.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography align="center" gutterBottom variant="h5" color="primary" component="h2">
                                        Blog Post One
                                    </Typography>
                                    <Typography variant="body2" align="center" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    <Button variant="text" elevation={0} classes={{label:classes.lightGrey}} className={classes.readMore} color="default">
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/asset/imageSoap.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography align="center" gutterBottom variant="h5" color="primary" component="h2">
                                        Blog Post One
                                    </Typography>
                                    <Typography variant="body2" align="center" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    <Button variant="text" elevation={0} classes={{label:classes.lightGrey}} className={classes.readMore} color="default">
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Blog

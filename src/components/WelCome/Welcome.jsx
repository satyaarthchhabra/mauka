import {  Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(theme => ({
lightGrey: {
    color: theme.palette.common.lightGrey
},
imageContainer: {
    width: "83vw",
    margin: "3rem 0",
},
}))


const Welcome = () => {
const    uselessArray= new Array("1","2","3","4");
    const classes = useStyles();
    return (
        <>
            <Grid container direction="column" alignItems="center" >
                <Typography variant="h1" color="primary">
                    <img src="/asset/Group 114.png" alt="leaf" />
                </Typography>
                <Typography variant="h3" color="gray" className={classes.lightGrey} >
                    Welcome to nature
                </Typography>
                <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit quibusdam voluptas?
                </Typography>
                <Typography variant="subtitle1" color="gray" className={classes.lightGrey} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptas?
                </Typography>
                <Grid container direction="row" justify="space-between" alignItems="center" className={classes.imageContainer} >
                    {
                         uselessArray.map((a,index)=>(
                    <Grid item key={index}>
                       <img src={`${index===1 ?"/asset/Group 205.png":"/asset/Group 207.png"}`} className={classes.cardImage} alt="" />
                    </Grid>

                         ))
                    }
                
                </Grid>
            </Grid>
        </>
    )
}

export default Welcome

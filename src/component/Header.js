import React from 'react';
import { Typography,Container, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        height:"100%"
      },
     flexCenter: {
         display:"flex",
         justifyContent:"center",
         flexDirection:"column",
     },
     mainHeading:{
      color: 'white',
      fontWeight:"bold"
     },
     description:{
       color:"white",
       fontWeight:"500",
     },
     search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.5),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 1),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 'auto',
        },
      },
     searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width:"100%"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '100%',
          height: '3ch',
        },
      },

}));


function Header(){
    const classes = useStyles();

    return(
        <div className="col-12 header-bg">
            <Container className={classes.grow}>
                <div className={`${classes.flexCenter} h-100 col-md-5 col-sm-8`}>
                <Typography variant="h4" className={`${classes.mainHeading} mt-3`}>
                    Learn on your schedule
                </Typography>
                <Typography variant="subtitle1" className={`${classes.description} my-3`}>
                    Study any topic any time. Choose from thousands of expert-led courses now.

                </Typography>
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="error" />
            </div>
            <InputBase
              placeholder="What do you want to learn?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                </div>
                </Container>
            </div>
    )

}


export default Header;

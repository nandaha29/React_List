import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#fff',
    },
    title: {
        color: '#008891',
    },

}))

export default function Header() {
    
    const classes = useStyles();
    return (
        
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Container>
                <Grid container alignItems="center">
                    <Grid item> 
                        <Typography className={classes.title} variant="h6" noWrap>
                            My React List
                        </Typography>
                    </Grid>

                    <Grid item sm></Grid> {/* utk -> jarak*/}

                    <Grid item > 
                        <IconButton component={Link} to="/">
                            <EventIcon fontSize="small" />
                        </IconButton>
                        <IconButton component={Link} to="/Belanja">
                            <ShoppingCartIcon fontSize="small" />
                        </IconButton>
                    </Grid>

                </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
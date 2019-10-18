import {urls} from '../../utils/urlUtils';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import React from 'react';

export const TopBar = () => <AppBar position="static">
    <Toolbar>
        <IconButton color="inherit" aria-label="Menu"
                    component={props =>
                    <Link to ={urls.home.path} {...props}/>}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit">
                        Meus livros
                    </Typography>
    </Toolbar>
</AppBar>;

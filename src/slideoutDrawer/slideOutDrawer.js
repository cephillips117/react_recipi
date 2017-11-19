/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
//import AppBar from 'material-ui/AppBar';
//import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
//import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon  from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Button from 'material-ui/Button';
import PaperSheet from '../paperCard/paperCard.js';
import AddIcon from 'material-ui-icons/Add';
//import ModeEditIcon from 'material-ui-icons/ModeEdit';


//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        marginLeft: -drawerWidth,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100%)',
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

class PersistentDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    {/*<AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                Persistent drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>*/}
                    <Drawer
                        type="persistent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <List className={classes.list}>
                                <Button disableRipple="true">
                                    <AddIcon style={{marginRight: 15}}/>
                                    1/2 Cup Butter
                                </Button>
                               </List>
                            <Divider />
                            <List className={classes.list}>
                                <Button disableRipple="true">
                                    <AddIcon style={{marginRight: 15}}/>
                                    1 Tsp Salt
                                </Button>
                            </List>
                        </div>
                    </Drawer>
                    <main className={classNames(classes.content, this.state.open && classes.contentShift)}>
                        <Button fab color="primary" aria-label="add" style={{position: "absolute"}} className={classNames(classes.button, this.state.open && classes.hide)} onClick={this.handleDrawerOpen}>
                            <MenuIcon  />
                        </Button>
                        {/*<Typography type="body1" noWrap>
                            {'You think water moves fast? You should see ice.'}
                        </Typography>*/}
                        <div style={{marginLeft: 15, marginRight: 15, marginTop: 15}}>
                            <PaperSheet></PaperSheet>
                        </div>

                    </main>
                </div>
            </div>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
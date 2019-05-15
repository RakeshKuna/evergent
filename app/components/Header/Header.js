import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import './style.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -14,
    marginRight: 10,
    padding: 8
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="header blueHead">
        <div className="container">
          <Toolbar variant="dense" >
            <IconButton classes={{ root: classes.menuButton }} aria-label="Menu">
              <SvgIcon className="menuicon blue-icon" width="31" height="19" viewBox="0 0 31 19">
                <g id="Group_262" data-name="Group 262" transform="translate(2948 16)">
                  <rect id="Rectangle_104" data-name="Rectangle 104" width="31" height="1" transform="translate(-2948 -16)" fill="#fff" />
                  <rect id="Rectangle_105" data-name="Rectangle 105" width="31" height="1" transform="translate(-2948 -7)" fill="#fff" />
                  <rect id="Rectangle_106" data-name="Rectangle 106" width="31" height="1" transform="translate(-2948 2)" fill="#fff" />
                </g>
              </SvgIcon>
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

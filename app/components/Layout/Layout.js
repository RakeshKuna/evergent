/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'components/Header';
// import Footer from 'components/Footer';
import './style.scss';

const Layout = (props) => (
  <Grid>
    <Header />
    <div className="wrapper">
      {props.children}
    </div>
    {/* <Footer /> */}
  </Grid>
);

export default Layout;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { reduxForm } from 'redux-form';
import {
  Grid, Link,
  Typography,
  TextField,
  Button, MenuItem, Icon, Fab
} from '@material-ui/core';
import EvergentLogo from '../../images/Evergent-logo.svg';
import './style.scss';

const businessModel = [
  {
    value: 'WISP',
    label: 'WISP',
  },
  {
    value: 'VDSL',
    label: 'VDSL',
  },
  {
    value: 'TELCOM',
    label: 'TELCOM',
  },
  {
    value: 'CONVERGENT',
    label: 'CONVERGENT',
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      businessModel: ''
    };
  }
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    return (
      <Grid container className="block_center">
        <Grid item className="signup_main">
          <div className="signup">
            <Link href="/" className="close_signup">
              <Icon color="primary">
                clear
              </Icon>
            </Link>
            <div className="logo">
              <Link href="/">
                <img src={EvergentLogo} width="180px" alt="EvergentLogo" />
              </Link>
            </div>
            <div className="signup_in">
              <div>
                <div className="welcome_content">
                  <Typography variant="h1" gutterBottom color="primary">
                  Let's get started!
                  </Typography>
                  <p>Sign in to continue</p>
                </div>
                <form noValidate autoComplete="off">
                  <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="email"
                        label="Email"
                        defaultValue="hello@sonymedia.com"
                        className="text_field filled"
                        variant="filled"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="companyName"
                        label="Company Name"
                        className="text_field"
                        variant="filled"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="contact"
                        label="Contact"
                        className="text_field"
                        variant="filled"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="businessModel"
                        select
                        label="Business Model"
                        className="text_field"
                        value={this.state.businessModel}
                        onChange={this.handleChange('businessModel')}
                        fullWidth
                        SelectProps={{
                          MenuProps: {
                            className: 'menu',
                          },
                        }}
                        variant="filled"
                      >
                        {businessModel.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="password"
                        className="text_field"
                        variant="filled"
                        required
                        fullWidth
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="conformPassword"
                        className="text_field"
                        variant="filled"
                        required
                        fullWidth
                        type="password"
                        label="Conform Password"
                        value={this.state.conformPassword}
                        onChange={this.handleChange('conformPassword')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} className="sign_btn">
                      <Button variant="contained" size="large" color="secondary" className="btn signup mobile_full">
                        Sign Up
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} className="term_cond">
                      <p>By clicking "Sign Up" you agree to terms and conditions.</p>
                    </Grid>
                  </Grid>
                </form>
                <Grid container justify="center" alignItems="center">
                  <Grid item className="sign_bottom">
                    <p>Already a member? <Link href="/">Sign In</Link></p>
                  </Grid>
                </Grid>
              </div>
              <div style={{ display: 'none' }} className="signup_sucess">
                <div className="welcome_content">
                  <Fab size="medium" color="secondary" className="no_shadow check_icon">
                    <Icon>check</Icon>
                  </Fab>
                  <Typography variant="h1" gutterBottom color="primary">
                  Thanks for signing up for Evergent
                  </Typography>
                  <p>You are few steps away to finish the Business configuration.</p>
                </div>
                <form noValidate autoComplete="off">
                  <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} className="sign_btn">
                      <Button variant="contained" size="large" color="secondary" className="btn signup">
                      Continue
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default reduxForm({
  form: 'Register', // a unique identifier for this form
  // validate,
  // asyncValidate
})(Register);

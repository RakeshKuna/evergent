/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Grid, Link,
  Typography,
  InputAdornment,
  IconButton, Button
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EvergentLogo from 'images/Evergent-logo.svg';
import TextField from 'components/TextField';
import './style.scss';


const renderPassword = ({
  input,
  label,
  ...custom
}) => (
  <TextField
    type={input.value ? 'password' : 'text'}
    label="Password"
    onCheck={input.onChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton aria-label="Toggle password visibility">
            {input.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
    input={input}
    {...custom}
  />
);

// eslint-disable-next-line react/prefer-stateless-function
const Login = () => (
  <Grid container className="block_center">
    <Grid item className="Login_main">
      <div className="Login">
        <div className="Login_in">
          <div className="logo">
            <Link href="/">
              <img src={EvergentLogo} width="180px" alt="EvergentLogo" />
            </Link>
          </div>
          <div className="welcome_content">
            <Typography variant="h2" gutterBottom color="primary">
                  Welcome Back,
            </Typography>
            <p>Sign in to continue</p>
          </div>
          <form noValidate autoComplete="off">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Field name="Email" required fullWidth component={TextField} placeholder="Email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <Field name="Password" required fullWidth component={renderPassword} placeholder="Password" label="Password" />
                {/* <TextField
                      id="filled-adornment-password"
                      className="text_field"
                      variant="filled"
                      required
                      fullWidth
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="Password"
                      value={this.state.password}
                      onChange={this.handleChange('password')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                              {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    /> */}
              </Grid>
              <Grid item xs={12}>
                <p className="fpassword">
                  <Link>Forgot Password?</Link>
                </p>
              </Grid>
              <Grid item xs={12} className="login_bottom">
                <Button variant="contained" size="medium" color="secondary" className="btn mobile_full">
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <div className="signup_text">
          <p>Don't have an account? <Link href="/register">Sign Up</Link></p>
        </div>
      </div>
    </Grid>
  </Grid>
);
export default reduxForm({
  form: 'Login', // a unique identifier for this form
  // validate,
  // asyncValidate
})(Login);

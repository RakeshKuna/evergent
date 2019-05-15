import React from 'react';
import TextField from '@material-ui/core/TextField';

const textfield = ({
  input, label, type,
  meta: { touched, error } = {},
  ...custom
}) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <TextField
    required
    id={label}
    label={label}
    type={type}
    className={`text_field ${input.value ? 'filled' : ''}`}
    value={input.value}
    variant="filled"
    fullWidth
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

export default textfield;

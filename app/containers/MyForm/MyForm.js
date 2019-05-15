import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const required = (value) => (value == null ? 'Required' : undefined);
const email = (value) =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);

class MyForm extends React.PureComponent {
  render() {
    const { pristine, reset, submitting } = this.props;
    return (
      <form>
        <div>
          <Field
            name="username"
            component={TextField}
            placeholder="username"
            validate={[required, email]}
            label="username"
            floatingLabelText="username"
          />
        </div>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}

// Decorate with redux-form
export default reduxForm({
  form: 'myForm'
})(MyForm);

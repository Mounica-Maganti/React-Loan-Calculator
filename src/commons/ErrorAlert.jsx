
import React from 'react';
import PropTypes from 'prop-types';
import '../custom.css';

const ErrorAlert = ({ errorMessage }) => (
  <div className="custom-alert">{errorMessage}</div>
);

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

ErrorAlert.defaultProps = {
  errorMessage: ''
};
export default ErrorAlert;
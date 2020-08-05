import React from 'react';
import Proptypes from 'prop-types';

import { ButtonLink } from './styles';

function Button({ className, to, children }) {
  return (
    <ButtonLink to={to} className={className}>
      {children}
    </ButtonLink>
  );
}

Button.defaultProps = {
  to: '/',
  className: '',
};

Button.propTypes = {
  className: Proptypes.string,
  to: Proptypes.string,
  children: Proptypes.node.isRequired,
};

export default Button;

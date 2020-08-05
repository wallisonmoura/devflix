import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

import { Main } from './styles';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;

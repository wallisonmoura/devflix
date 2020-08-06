import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import { Container } from './styles';

function Slider({ children }) {
  return (
    <Container>
      <SlickSlider
        {...{
          dots: false,
          infinite: true,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;

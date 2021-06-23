import { Box } from '@chakra-ui/react';
import React, { useRef } from 'react';
// import VisibilitySensor from 'react-visibility-sensor';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const test = () => {
  //   function onChange(isVisible) {
  //     console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  //   }

  return (
    <Box mt="2000px">
      {/* <VisibilitySensor onChange={onChange}>
        <Box
          style={{
            color: 'black',
          }}>
          I am #
        </Box>
      </VisibilitySensor> */}
      <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <h1>animateOut</h1>
      </ScrollAnimation>
      <div></div>
    </Box>
  );
};

export default test;

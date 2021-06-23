import { Box, Center, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavCard from 'component/NavCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 12,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: <ChevronRightIcon boxSize="7" />,
  prevArrow: <ChevronLeftIcon boxSize="7" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};
const watches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const SecondaryHeader = () => {
  return (
    <Container maxW={['8xl', '5xl']}>
      <Box pt={2} pb={3}>
        <Slider {...settings}>
          {watches.map((watch) => (
            <Box>
              <NavCard watch={watch} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default SecondaryHeader;

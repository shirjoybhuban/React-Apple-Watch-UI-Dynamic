import { Box, Center, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WatchCard from './WatchCard';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  //   nextArrow: <MZNextIcon boxSize="7" />,
  //   prevArrow: <MZPrevIcon boxSize="7" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const watches = [1, 2, 3, 4, 5, 6, 7, 8];
const ShopWatch = ({ watch }) => {
  return (
    <div>
      <Box mt={120}>
        <Container maxW="7xl">
          <Box mb={10}>
            <Center>
              <Text
                fontSize={['30px', '48px']}
                fontWeight="600"
                color="#000000"
                lineHeight="1">
                Shop all watches
              </Text>
            </Center>
          </Box>
          <Box
            px={[10, 0]}
            boxShadow="0px 4px 2px 0px rgba(0, 0, 0, 0.15)"
            borderRadius="7px">
            <Box pb={5}>
              <Slider {...settings}>
                {watch &&
                  watch.response.map((watch) => (
                    <Box>
                      <WatchCard watch={watch} />
                    </Box>
                  ))}
              </Slider>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ShopWatch;

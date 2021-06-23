import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  usePrefersReducedMotion,
  keyframes,
  useBreakpointValue,
  Center,
  Img,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import fadeInUp from 'react-animations/lib/fadeInUp';
const Hero = () => {
  const spin = keyframes`${fadeInUp}`;
  const [anim, setAnim] = useState(false);
  const [animStatus, setAnimStatus] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion ? undefined : `${spin} 1s ease-in-out`;

  const display = useBreakpointValue({ base: 'none', md: 'block' });

  return (
    <div>
      <Box
        backgroundImage="url('betanic/2.jpg')"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display={display}>
        <Container maxW="5xl">
          <Grid h="94vh" templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colSpan={[3, 2]} p={5} alignSelf="center">
              <Box p={1}>
                <Text
                  fontSize="3xl"
                  fontWeight="591"
                  color="#000000"
                  animation={animation}>
                  Amazfit GTS 2e
                </Text>
                <Text
                  fontSize="2xl"
                  mb={3}
                  fontWeight="501"
                  color="#000000"
                  animation={animation}>
                  Where Style Meets Health
                </Text>
                <Box animation={animation}>
                  <Text fontSize="sm" color="#000000">
                    Thin and Light Bezel-less Design
                  </Text>
                  <Text fontSize="sm" color="#000000">
                    HD Always-on AMOLED Display
                  </Text>
                  <Text fontSize="sm" color="#000000">
                    All-round Health and Fitness Tracking
                  </Text>
                  <Text fontSize="sm" color="#000000">
                    Long Battery Life
                  </Text>
                  <Text fontSize="sm" color="#000000">
                    Alexa Built-in
                  </Text>
                </Box>
              </Box>
              <Box mt={3}>
                <Box
                  as="button"
                  mt={2}
                  height="36px"
                  width="120px"
                  lineHeight="1.2"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  fontSize="14px"
                  fontWeight="semibold"
                  bg="#f22f2f"
                  color="white"
                  _hover={{ bg: '#f22f2f' }}
                  _active={{
                    bg: '#f22f2f',
                    transform: 'scale(0.98)',
                  }}
                  _focus={{
                    boxShadow:
                      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                  }}>
                  Buy
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box display={useBreakpointValue({ base: 'block', md: 'none' })}>
        <Center>
          <Img src="/betanic/8.jpg" alt="watchos" />
        </Center>
      </Box>
    </div>
  );
};

export default Hero;

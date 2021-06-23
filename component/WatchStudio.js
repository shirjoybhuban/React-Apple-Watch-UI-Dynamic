import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Container,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Tr,
  Text,
  usePrefersReducedMotion,
  keyframes,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const WatchStudio = () => {
  const spin = useBreakpointValue({
    base: keyframes`
  0% { background-position: -70px 0; }
	100% { background-position: -325px 0; }
`,
    md: keyframes`
  0% { background-position: -70px 0; }
	100% { background-position: -260px 0; }
`,
  });
  const [anim, setAnim] = useState(false);
  const [animStatus, setAnimStatus] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion ? undefined : `${spin} 1s ease-in-out`;

  function onChange(isVisible) {
    if (!animStatus) {
      setAnim(isVisible ? true : false);
      setAnimStatus(isVisible ? true : false);
    }
    // console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

  return (
    <div>
      <Box mt={[20, 120]}>
        <Container maxW="8xl">
          <Box>
            <Center mb={['15px', '26px']}>
              <Text fontSize="24px" fontWeight="591" color="#000000">
                Apple Watch Studio
              </Text>
            </Center>
            <Center>
              <Text
                fontSize={['30px', '48px']}
                fontWeight="600"
                color="#000000"
                lineHeight="1">
                Any case. Any band.
              </Text>
            </Center>
            <Center mb={['10px', '26px']}>
              <Text
                fontSize={['30px', '48px']}
                fontWeight="600"
                color="#000000">
                Any style you want.
              </Text>
            </Center>
            <Center>
              <Box
                as="button"
                mt={2}
                mb={['0px', '21px']}
                height="46px"
                width="200px"
                lineHeight="1.2"
                fontWeight="600"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                fontSize="17px"
                borderRadius="100px"
                bg="white"
                color="#000000"
                _hover={{ bg: '#white' }}
                _active={{
                  bg: '#white',
                  transform: 'scale(0.98)',
                }}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}>
                Create your style
              </Box>
            </Center>
          </Box>
          <VisibilitySensor onChange={onChange}>
            <Box display="hidden">.</Box>
          </VisibilitySensor>
          <Box height={['200px', '500px']} position="relative">
            <Center>
              <Img
                src="betanic/4.png"
                height={['200px', '522px']}
                mr={[0, 3]}
              />
            </Center>
            <Box
              left="0"
              right="0"
              top="0"
              bottom="0"
              position="absolute"
              backgroundImage="url('betanic/3.jpg')"
              animation={anim ? animation : null}
              backgroundPosition={['-325px 0', '-260px 0']}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              zIndex="-1"></Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default WatchStudio;

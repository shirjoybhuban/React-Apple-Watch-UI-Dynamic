import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Container,
  HStack,
  Img,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

const WatchOs = () => {
  return (
    <div>
      <Box mt={90}>
        <Container maxW={['8xl', '7xl']}>
          <Box>
            <Center display={useBreakpointValue({ base: 'none', md: 'block' })}>
              <Img src="/betanic/7.jpg" alt="watchos" />
            </Center>
            <Center display={useBreakpointValue({ base: 'block', md: 'none' })}>
              <Img src="/betanic/9.jpg" alt="watchos" />
            </Center>
          </Box>
          <Box>
            <Center mb={2}>
              <Text
                fontSize={['32px', '48px']}
                fontWeight="600"
                color="#000000">
                watchOS 8
              </Text>
            </Center>
            <Center mb={3}>
              <Text fontSize="19px" fontWeight="600" color="#000000">
                A look inward. A leap forward.
              </Text>
            </Center>
            <Center>
              <HStack>
                <Link fontSize="19px" fontWeight="501" color="#06c">
                  See what’s new
                </Link>
                <ChevronRightIcon
                  color="#06c"
                  boxSize="7"
                  marginBottom="-5px"
                />
              </HStack>
            </Center>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default WatchOs;

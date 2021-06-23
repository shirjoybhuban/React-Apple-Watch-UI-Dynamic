import { Img } from '@chakra-ui/image';
import { Center, Stack, Text, VStack } from '@chakra-ui/layout';
import Link from 'next/link';
import React from 'react';
const NavCard = () => {
  return (
    <div>
      <VStack>
        <Center>
          <Img
            h="54px"
            w="23px"
            src="https://www.apple.com/v/watch/home/al/images/overview/icons/watch_nav_se__en4ntkxi5guq_large.svg"
            alt="watch"
            cursor="pointer"
          />
        </Center>
        <Center>
          <Text fontSize="xs" fontWeight="400" align="center">
            Apple Watch Series 6
          </Text>
        </Center>
      </VStack>
    </div>
  );
};

export default NavCard;

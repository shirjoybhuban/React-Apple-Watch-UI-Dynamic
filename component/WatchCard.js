import { Img } from '@chakra-ui/image';
import { Center, Stack, Text, VStack } from '@chakra-ui/layout';
import Link from 'next/link';
import React from 'react';

const WatchCard = ({ watch }) => {
  return (
    <div>
      <VStack>
        <Center>
          <Img
            h="238px"
            w="200px"
            src={`http://127.0.0.1:8000/${watch.thumbnail_img}`}
            alt="watch"
            cursor="pointer"
          />
        </Center>
        <Center>
          <Text fontSize="xl" fontWeight="600">
            {watch.name}
          </Text>
        </Center>
      </VStack>
    </div>
  );
};

export default WatchCard;

import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Img } from '@chakra-ui/image';
import { Box, Center, Text, VStack } from '@chakra-ui/layout';

export default function Custom404() {
  return (
    <VStack bg="brand.100" height="100vh">
      <Center>
        <Img src="/404.png" alt="404" w={800} />
      </Center>
      <Center>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Sorry! Something wrong here.
        </Text>
      </Center>
      <Center>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Try something Something else!
        </Text>
      </Center>
      <Center>
        <Button bg="#FF1616" borderRadius="10px" w={300}>
          TAKE ME AWAY
        </Button>
      </Center>
    </VStack>
  );
}

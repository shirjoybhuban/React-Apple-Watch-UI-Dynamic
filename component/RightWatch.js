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
} from '@chakra-ui/react';
import React from 'react';

const RightWatch = ({ watch }) => {
  console.log(watch);
  return (
    <div>
      <Box mt={[30, 120]}>
        <Container maxW="5xl">
          <Box>
            <Center>
              <Text
                fontSize={['30px', '46px']}
                fontWeight="591"
                color="#1d1d1f"
                align="center">
                Which Apple Watch is right for you?
              </Text>
            </Center>
            <Center>
              <HStack>
                <Link fontSize="xl" fontWeight="591" color="#06c" mt={[6, 0]}>
                  Compare all models
                </Link>
                <ChevronRightIcon
                  color="#06c"
                  boxSize="7"
                  marginBottom={['-30px', '-5px']}
                />
              </HStack>
            </Center>
          </Box>
          <Box mt={85}>
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              {watch &&
                watch.response.slice(0, 3).map((watch) => (
                  <Box>
                    <Center mb={3} mr={5}>
                      <Img
                        src={`http://127.0.0.1:8000/${watch.thumbnail_img}`}
                      />
                    </Center>
                    <Text fontSize="21px" fontWeight="600" color="#000000">
                      {watch.name}
                    </Text>
                    <Text fontSize="14px" fontWeight="600" color="#000000">
                      From ${watch.unit_price}
                    </Text>
                    <Box mt={3}>
                      <Table variant="simple">
                        <Tbody>
                          <Tr>
                            <Td pl={0} pb={2} color="#6e6e73">
                              {watch.case_size != null ? watch.case_size : '-'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td pl={0} pb={2} color="#6e6e73">
                              {watch.display != null ? watch.display : '-'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td pl={0} pb={2} color="#6e6e73">
                              {watch.gps != null ? watch.gps : '-'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td pl={0} pb={2} color="#6e6e73">
                              {watch.oxygen != null ? watch.oxygen : '-'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td pl={0} pb={2} color="#6e6e73">
                              {watch.ecg != null ? watch.ecg : '-'}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td pl={0} pb={2} color="#6e6e73">
                              {watch.water_resistance != null
                                ? watch.water_resistance
                                : '-'}
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </Box>

                    <Box
                      as="button"
                      mt={2}
                      mb="30px"
                      height="36px"
                      width="70px"
                      lineHeight="1.2"
                      fontWeight="500"
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      fontSize="17px"
                      borderRadius="100px"
                      bg="#0077ED;"
                      color="#ffffff"
                      _hover={{ bg: '#0077ED;' }}
                      _active={{
                        bg: '#0077ED;',
                        transform: 'scale(0.98)',
                      }}
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                      }}>
                      Buy
                    </Box>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default RightWatch;

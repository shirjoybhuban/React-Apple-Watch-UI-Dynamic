import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box mt={[30, 50]} mb={5} bg="#f4f5f7">
      <Container maxW="5xl">
        <Box borderBottom="1px solid #AEAEAE">
          <Text fontSize="sm" color="#AEAEAE" py={3}>
            AMAZFIT
          </Text>
        </Box>
        <Box borderBottom="1px solid #AEAEAE">
          <SimpleGrid columns={[2, 5]} spacing="40px" py={5}>
            <Box>
              <Text fontSize="sm" color="#00000" fontWeight="700">
                All Products
              </Text>
              <Text fontSize="sm" color="#777777">
                Smart Watches & Bands
              </Text>
              <Text fontSize="sm" color="#777777">
                Lifestyle & Health
              </Text>
              <Text fontSize="sm" color="#777777">
                Sports Gear
              </Text>
              <Text fontSize="sm" color="#777777">
                Accessories
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="#00000" fontWeight="700">
                Newsroom
              </Text>
              <Text fontSize="sm" color="#777777">
                Press Releases
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="#00000" fontWeight="700">
                Partners
              </Text>
              <Text fontSize="sm" color="#777777">
                Retailers
              </Text>
              <Text fontSize="sm" color="#777777">
                Affiliates
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="#00000" fontWeight="700">
                Support
              </Text>
              <Text fontSize="sm" color="#777777">
                FAQ
              </Text>
              <Text fontSize="sm" color="#777777">
                Product Manual
              </Text>
              <Text fontSize="sm" color="#777777">
                Product Videos
              </Text>
              <Text fontSize="sm" color="#777777">
                Accessories
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="#00000" fontWeight="700">
                About Us
              </Text>
              <Text fontSize="sm" color="#777777">
                About Amazfit
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

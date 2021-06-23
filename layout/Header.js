import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Img,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  UnlockIcon,
} from '@chakra-ui/icons';

const Links = ['Mac', 'ipad', 'iphone', 'Watch', 'TV', 'Music', 'Support'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    pt={1}
    pb={2}
    flex="1"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      opacity: '1',
    }}
    fontSize="15px"
    href={'#'}
    color="#f5f5f7"
    opacity="0.8">
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="rgba(0,0,0,0.92)">
      <Container maxW="5xl">
        <Box>
          <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              color="#f5f5f7"
              bg="rgba(0,0,0,0.62)"
            />
            <HStack spacing={8} alignItems={'center'} width={['', '100%']}>
              <Box>
                <Img
                  opacity="0.8"
                  cursor="pointer"
                  _hover={{
                    opacity: '1',
                  }}
                  src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
                  alt="watchos"
                />
              </Box>
              <HStack
                as={'nav'}
                // spacing={4}
                width="100%"
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <Box mb={2} flex="1">
                  <SearchIcon
                    opacity="0.8"
                    color="#f5f5f7"
                    cursor="pointer"
                    _hover={{
                      opacity: '1',
                    }}
                  />
                </Box>
                <Box mb={2} flex="1">
                  <UnlockIcon
                    opacity="0.8"
                    color="#f5f5f7"
                    cursor="pointer"
                    _hover={{
                      opacity: '1',
                    }}
                  />
                </Box>
              </HStack>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}

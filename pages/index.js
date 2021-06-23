import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/layout';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useColorModeValue,
  Center,
  useToast,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import Hero from 'component/Hero';
import RightWatch from 'component/RightWatch';
import WatchStudio from 'component/WatchStudio';
import VisibilitySensor from 'react-visibility-sensor';
import ShopWatch from 'component/ShopWatch';
import WatchOs from 'component/WatchOs';
import SecondaryHeader from 'layout/SecondaryHeader';
import useSWR from 'swr';
import { fetcher } from 'service/axiosGet';

const Index = observer(() => {
  const api = `http://127.0.0.1:8000/api/featured-products`;
  const { data: watch, mutate: watchMutate } = useSWR(api, fetcher);

  return (
    <Box>
      <SecondaryHeader />
      <Hero />
      <RightWatch watch={watch} />
      <WatchStudio />
      <ShopWatch watch={watch} />
      <WatchOs />
    </Box>
  );
});
export default Index;

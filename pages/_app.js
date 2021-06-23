import 'styles/global.css';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { Head } from 'next/document';
import { observer } from 'mobx-react-lite';
import { RootStoreProvider, useRootStore } from 'models/root-store-provider';
import Header from 'layout/Header';
import '@fontsource/oswald';
import '@fontsource/roboto';
import Footer from 'layout/Footer';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#19D7FE',
      200: '#00c1e3',
      300: '#00FAFF',
      400: '#1A69FF',
      900: '#1a202c',
    },
    password: {
      100: '#D0D2D1',
    },
  },
  fonts: {
    heading: 'roboto',
    body: 'roboto',
  },
});
const ViewPort = observer(({ Component, pageProps }) => {
  const { hydrated, user } = useRootStore();

  return (
    <Flex direction="column" minHeight="100vh" maxWidth="100vw">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Flex>
  );
});
const App = (props) => (
  <RootStoreProvider>
    <ChakraProvider theme={theme}>
      <ViewPort {...props} />
    </ChakraProvider>
  </RootStoreProvider>
);

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {useStore } from '../redux/configureStore';
import { Provider } from 'react-redux';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Image from 'next/image';
import { Container, Grid } from '@material-ui/core';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const store = useStore(pageProps.initializeReduxState);
  const persistor = persistStore(store);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Trainer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link> */}
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
         {/* Adding a Provider */}
         <Provider store={store}>
          <PersistGate loading={
              <>
                <Container maxWidth='xs' className='text-center p-5 '>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Image alt = '' src={'/loadbrand.png'} width='200' height='50'/>
                  <Image className = 'text-center' src = {'/load.gif'} width='96' height='96'/>
                  </Grid>
                </Container>
              
              
              </>
              
              } persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
         </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};


{/* <Image src ={'/loading.gif'} layout='fill'/> */}

// , {}, () => persistor.persist()
import React from 'react';
import Head from 'next/head';
import 'styles/app.css';

export default function App({Component, pageProps}){
  return (
    <>
      <Head>
        <title>这是一个 title</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

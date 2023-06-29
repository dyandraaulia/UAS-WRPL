import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
  </Head>
  return <Component {...pageProps} />
}

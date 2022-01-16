import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import AppLayout from '../components/app-layout';
import '../styles.css';



// import App from 'next/app'

function SpasApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href={`https://fonts.googleapis.com/css2?family=Pompiere&display=swap&text=${process.env.longName}${process.env.shortName}${process.env.city}`} rel="stylesheet" />
        
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Anton&display=swap" rel="stylesheet"/>

      </Head>

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}


export default SpasApp
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
    </Head>
    <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }} 
    />
    <Component {...pageProps} />
  </>
  
}

export default MyApp

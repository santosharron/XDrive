import "../styles/globals.css";
import { XDriveProvider } from "../context/XDriveContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>XDrive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <XDriveProvider>
        <Component {...pageProps} />
      </XDriveProvider>
    </>
  );
}

export default MyApp;

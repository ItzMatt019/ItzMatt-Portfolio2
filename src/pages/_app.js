import '@/styles/globals.css';
import Navbar from 'src3/components/Navbar';
import Footer from 'src3/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
import { AppProps } from 'next/app';
import '../styles.css';
import ParticlesBackground from '../components/Particles';


function MyApp({ Component, pageProps }: AppProps) {
  return <><ParticlesBackground /><Component {...pageProps} /></>
}

export default MyApp
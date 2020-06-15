import { AppProps } from 'next/app';
import '../styles.css';
import ParticlesBackground from '../components/Particles';


function MyApp({ Component, pageProps }: AppProps) {
  return <div className="mainContainer"><ParticlesBackground /><Component {...pageProps} /></div>
}

export default MyApp
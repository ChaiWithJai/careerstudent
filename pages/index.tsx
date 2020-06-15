import Link from 'next/link';
import Layout from '../components/Layout';
import TypeWriter from '../components/TypeWriter';

const IndexPage = () => (
  <Layout title="Career Student">
    <h1>Hey, I'm Jai</h1>
    <TypeWriter />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

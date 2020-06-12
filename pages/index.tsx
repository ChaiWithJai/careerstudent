import Link from 'next/link';
import Layout from '../components/Layout';
import TypeWriter from '../components/TypeWriter';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <TypeWriter />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

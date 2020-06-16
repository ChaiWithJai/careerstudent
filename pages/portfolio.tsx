import Link from 'next/link'
import Layout from '../components/Layout'

const PortfolioPage = () => (
  <Layout title="Career Student">
    <h1>Career Student</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <Link href="/blogs">
          <a>Blogs</a>
        </Link>{' '}
        | <a href="/api/blogs">Blog API</a>
  </Layout>
)

export default PortfolioPage;

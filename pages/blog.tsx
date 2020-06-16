import Link from 'next/link'
import Layout from '../components/Layout'

const BlogPage = () => (
  <Layout title="Career Student">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default BlogPage

import Link from 'next/link'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from '../components/Layout.module.css';

const IndexPage = () => (
  <div className={styles.parentContainer}>
    <div className={styles.blogContainer}>
      <Link href="/blog">
        <h1 className={styles.blogText}>Blog</h1>
      </Link>
    </div>
    <div className={styles.bodyAndFooterContainer}>
      <Layout title="Career Student" />
      <Footer />
    </div>
  </div>
)

export default IndexPage

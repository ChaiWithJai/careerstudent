import Link from 'next/link'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from '../components/Layout.module.css';

const IndexPage = () => (
  <div className={styles.parentContainer}>
    <div className={styles.linkContainer}>
      <Link href="/blogs">
        <a className={styles.blogText}>Blog</a>
      </Link>
    </div>
    <div className={styles.bodyAndFooterContainer}>
      <Layout title="Career Student" />
      <Footer />
    </div>
    <div className={styles.linkContainer}>
      <Link href="/portfolio">
        <a className={styles.portfolioText}>Portfolio</a>
      </Link>
    </div>
  </div>
)

export default IndexPage

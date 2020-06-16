import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Blog } from '../../interfaces'
import { sampleBlogData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import styles from './blog.module.css';

type Props = {
  items: Blog[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Blog">
    <div className={styles.blogContainer}>
      <h1>Career Student</h1>
      <div>
        <h2>Personal Blog by <Link href="/"><a>Jai</a></Link></h2>
        <p>Details of what I'm currently learning</p>
      </div>
      <List items={items} />
    </div>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Blog[] = sampleBlogData
  return { props: { items } }
}

export default WithStaticProps

import Layout from '../components/Layout'
import PortfolioEntry from '../components/PortfolioEntry'
import styles from './portfolio.module.css'

const cityblockEntry = {
  name: 'Population Health',
  imageSrc: '/images/cityblock.png',
  description: 'Part of a team at Cityblock Health, responsible for population health tools inside propritary app.',
  techStack: ['TypeScript', 'GraphQL (Apollo)', 'PostgreSQL', 'Node.js', 'Knex.js', 'Objection.js', 'React', 'Jest', 'Cypress']
}

const workitEntry = {
  name: 'Workit',
  imageSrc: '/images/workit.png',
  description: `I love exercising and nutrition, but I fall victim to the Law of Familiarity. I know a lot of things, but I don't do them. So I'm building an algorithm to help me do the right things I need for my personal health without thinking about them. Ask me about my product roadmap for this.`,
  techStack: ['TypeScript', 'Node.js', 'React']
}

const prophetEntry = {
  name: 'Prophet',
  imageSrc: '/images/prophet.gif',
  description: 'A sandbox environment to trade stocks.',
  techStack: ['JavaScript', 'Express', 'PostgreSQL', 'Node.js', 'Redux', 'Sequalize', 'React', 'Chai', 'Heroku']
}

const portfolioEntries = [cityblockEntry, workitEntry, prophetEntry]

const PortfolioPage = () => (
  <Layout title="Jai's Portfolio">
    <div className={styles.portfolioContainer}>
      <h1>Portfolio</h1>
      {portfolioEntries.map((entry, idx) => <PortfolioEntry key={`entry-${idx}`} entry={entry} />)}
    </div>
  </Layout>
)

export default PortfolioPage;

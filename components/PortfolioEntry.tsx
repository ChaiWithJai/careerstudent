import React from 'react';
import styles from '../pages/portfolio.module.css'

interface IProps {
    entry: {
        name: string,
        imageSrc: string,
        description: string,
        techStack: string[];
    }
}

const PortfolioEntry: React.FC<IProps> = ({entry}) => {
    const {name, description, imageSrc, techStack} = entry;
    return (
    <div className={styles.portfolioEntryContainer}>
    <div>
      <img src={imageSrc} height="300px" width="413px" />
    </div>
    <div>
    <h2>{name}</h2>
    <p>{description}</p>
      <h3>Tech Stack:</h3>
      <ul>
        {
            techStack.map((tech, idx) => <li key={`tech-${idx}`}>{tech}</li>)
        }
      </ul>
    </div>
  </div>
)}

export default PortfolioEntry;
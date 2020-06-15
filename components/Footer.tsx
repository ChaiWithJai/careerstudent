import React from 'react';
import styles from './Layout.module.css';

type Icons = "twitter" | "instagram" | "facebook" | "email" | "github";

type ILinks = {
    [key in Icons]: string
}

const links: ILinks = {
    twitter: "https://twitter.com/imShahrukhDon",
    instagram: "https://www.instagram.com/presidentbhagat/",
    facebook: "https://www.facebook.com/Jai91/",
    email: "mailto:jaybhagat841@gmail.com",
    github: "https://github.com/JBhagat841"
};

const icons: Icons[] = ["twitter", "instagram", "facebook", "email", "github"];

interface IImageProps {
    fileName: Icons
}

const Image: React.FC<IImageProps> = ({fileName}) => (
    <a href={links[fileName]} target="_blank">
        <img src={`/icons/${fileName}.png`} height="24px" width="24px" />
    </a>
)

const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <hr />
       {
           icons.map((icon, idx) => <Image key={`icon ${idx}`} fileName={icon}/>)
       }       
    </footer>
)

export default Footer;
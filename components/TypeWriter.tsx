import React, {useEffect, useState} from 'react';
import Typist from "react-typist";
import styles from "./TypeWriter.module.css"

const TypeWriter: React.FC = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
      }, [count]);

   return (
        <div className={styles.typeWriterTextContainer}>
            {count ? 
                <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span className={styles.typeWriterText}> Hey, I'm Jai</span>
                    <Typist.Backspace count={12} delay={800} />
                    <span className={styles.typeWriterText}> I like boxing</span>
                    <Typist.Backspace count={13} delay={800} />
                    <span className={styles.typeWriterText}> I also make a great cup of chai </span>
                    <Typist.Backspace count={30} delay={800} />
                </Typist> 
            : 
            ''}
        </div>
);
}

export default TypeWriter;
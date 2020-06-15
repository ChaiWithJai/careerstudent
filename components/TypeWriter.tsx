import React from 'react';
import Typist from "react-typist";
import styles from "./TypeWriter.module.css"

const messages = [`I like stand up comedy`, `I love boxing`, `I also make a great cup of chai`, `I'm a Kanye stan`, `Let's connect!`]

const TypeWriter: React.FC = () => (
    <Typist avgTypingDelay={50} cursor={{show: false}}>
        <Typist.Delay ms={1000} />
        {
            messages.map((message, idx) => {
                return (
                    <div className={styles.typeWriterText} key={`message ${idx}`}>
                        <span>{message}</span>
                        {idx !== messages.length - 1 ? <Typist.Backspace count={message.length} delay={800} /> : <></>}
                    </div>
                )    
            })
        }
    </Typist> 
);

export default TypeWriter;
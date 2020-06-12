import React, {useEffect, useState} from 'react';
import Typist from "react-typist";

const TypeWriter: React.FC = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
      }, [count]);

   return (
    <>{count ? <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
            <span> Hey, I'm Jai</span>
            <Typist.Backspace count={12} delay={800} />
            <span> I like boxing</span>
            <Typist.Backspace count={13} delay={800} />
            <span> I also make a great cup of chai </span>
    </Typist> : ''}</>
);
}

export default TypeWriter;
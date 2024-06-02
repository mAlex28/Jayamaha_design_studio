import React, { useState } from 'react';
import { BsMouse } from 'react-icons/bs'

import './ScrollButton.css'

const ScrollButton = () => {
    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto'

        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <button className="scroll-button">
            <BsMouse onClick={scrollToBottom} className="scroll-button-icon"
                style={{ display: visible ? 'inline' : 'none' }} />
        </button>
    )
}

export default ScrollButton
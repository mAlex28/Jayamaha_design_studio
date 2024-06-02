import React from 'react'

const Footer = () => {
    return (
        <footer>
            <small>
                © {new Date().getFullYear()} made by {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://alex-dev-portfolio.netlify.app">
                    Alex
                </a>
            </small>
            <br />
        </footer>
    )
}

export default Footer
import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <p>
                © 2021 |  Reactjs socket.io | Created by sooraj s |{' '}
                <a
                    href="https://github.com/sooraj-s-98/reactjs-socket-io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
};

export default Footer;

import type { NextPage } from 'next'

import styles from '../../../styles/Home.module.css'

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer}>
            <a
            href="https://github.com/wonmor"
            target="_blank"
            rel="noopener noreferrer"
            >
            <span className="text-center">Developed by <b>John Seong</b>. Served under the <b>MIT License</b>.</span>
            </a>
        </footer>
    )
}

export default Footer
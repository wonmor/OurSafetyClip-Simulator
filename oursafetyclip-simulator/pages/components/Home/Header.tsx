import type { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import styles from '../../../styles/Home.module.css'

const Header: NextPage = () => {
    return (
        <header className={styles.header}>
            <Link href="/" >
                <a>
                    <Image width={"375px"} height={"150px"} src="/logo.png" alt="logo"/>
                </a>
            </Link>
        </header>
    )
}

export default Header
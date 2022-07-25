import type { NextPage } from 'next'
import { Canvas } from "@react-three/fiber"

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Footer from './components/Home/Footer'
import Floor from './components/Home/Floor'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OurSafetyClip Simulator</title>
        <meta name="description" content="Simulates the functionality of the OurSafetyClip device." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Canvas
          shadows={true}
          className={styles.canvas}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <Floor position={[0, -1, 0]} />
        </Canvas>
      </main>

      <Footer />
    </div>
  )
}

export default Home

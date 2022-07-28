import type { NextPage } from 'next'
import { Canvas } from "@react-three/fiber"

import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from './components/Home/Header'
import Footer from './components/Home/Footer'

import { Controls } from './components/Geometries'

import ClipModel, { LightBulb } from './components/Geometries'

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://oursafetyclip-simulator.vercel.app'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OurSafetyClip: Simulator</title>
        <meta name="description" content="Simulates the functionality of the OurSafetyClip device." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.scene}>
          <Canvas
            shadows={true}
            className={styles.canvas}
            camera={{
              position: [-6, 7, 7],
            }}
          >
              <ambientLight color={"white"} intensity={0.2} />
              <LightBulb position={[0, 3, 0]} />
              <ClipModel rotateX={Math.PI / 2} scale={[0.1,0.1,0.1]} />
              <Controls />
          </Canvas>
          </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home

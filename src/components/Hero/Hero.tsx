import React from 'react'
import styles from './styles.module.scss';

export default function Hero() {
  return (
    <main className={styles.hero_container}>
      <section className={styles.background_color_contrast}/>
      <section className={styles.hero_center}>
        <h1>Hero!</h1>
      </section>
    </main>
  )
}

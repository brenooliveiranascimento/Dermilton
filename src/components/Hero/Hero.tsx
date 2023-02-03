import React from 'react'
import styles from './styles.module.scss';
import { uiHeroTexts } from '@/utils/texts';

export default function Hero() {
  return (
    <main className={styles.hero_container}>
      <section className={styles.background_color_contrast}/>
      <section className={styles.hero_center}>
        <h1>{uiHeroTexts.heroMain}</h1>
        <span>{uiHeroTexts.heroSub}</span>
      </section>
    </main>
  )
}

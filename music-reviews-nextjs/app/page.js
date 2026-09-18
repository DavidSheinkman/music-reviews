import Link from 'next/link';

import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>Afterhours Music Reviews</h1>
            <p>Discover & discuss music from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Music Reviews</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Afterhours Music Reviews is a platform for music lovers to share
            their honest reviews with the world. It&apos;s a place to discover
            new albums, and to connect with other music fans.
          </p>
          <p>
            Afterhours Music Reviews is a place to discover new albums, and to
            connect with other music fans.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Afterhours Music Reviews?</h2>
          <p>
            Afterhours Music Reviews is a platform for music lovers to share their
            honest reviews with the world. It&apos;s a place to discover new
            albums, and to connect with other music fans.
          </p>
          <p>
            Afterhours Music Reviews is a place to discover new albums, and to connect
            with other music fans.
          </p>
        </section>
      </main>
    </>
  );
}
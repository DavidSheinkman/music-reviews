import ReviewsGrid from '@/components/reviews/reviews-grid';
import classes from './page.module.css';
import Link from 'next/link';

export default function ReviewsPage() {
  return (

    <>
      <header className={classes.header}>
        <h1> Music Reviews, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite albums and share your thoughts!</p>

        <p className={classes.cta}>
          <Link href="/reviews/share">
            Share Your Favorite Album
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <ReviewsGrid reviews={[]} />

      </main>
    </>

  );
}
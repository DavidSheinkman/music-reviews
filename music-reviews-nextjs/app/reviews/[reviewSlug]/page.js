import classes from './page.module.css';
import Image from 'next/image';
import { getReview } from '@/lib/reviews';
import { notFound } from 'next/navigation';


export default function ReviewDetailesPage({ params }) {

  const review = getReview(params.reviewSlug);


  if(!review) {
    notFound();
  }

  review.content = review.content.replace(/\n/g, '<br />');


  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={review.image} alt={review.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{review.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${review.creator_email}`}>{review.creator}</a>
          </p>
          <p className={classes.summary}>
            {review.summary}
          </p>
        </div>
      </header>
      <main>
        <p className={classes.content} dangerouslySetInnerHTML={{ __html: review.content }} />
      </main>
    </>

  );
}
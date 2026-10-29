'use client';

import classes from './page.module.css';
import { useActionState } from 'react';
import ImagePicker from '@/components/reviews/image-picker';
import ReviewsFormSubmit from '@/components/reviews/reviews-form-submit';
import { shareReview } from '@/lib/actions';

export default function ShareReviewPage() {

  const [state, formAction] = useActionState(shareReview, { message: null });


  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite music album review</span>
        </h1>
        <p>Or any other music review you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <ReviewsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
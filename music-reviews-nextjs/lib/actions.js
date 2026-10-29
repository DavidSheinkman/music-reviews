'use server';

import { saveRreview } from './reviews';
import { redirect } from 'next/navigation';


  function isInvalidText(text) {
    return !text || text.trim() === '';
  }

  export async function shareReview(prevState, formData) {

    const review = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      content: formData.get('content'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

    if (
      isInvalidText(review.title) || 
      isInvalidText(review.summary) || 
      isInvalidText(review.content) || 
      isInvalidText(review.creator) || 
      isInvalidText(review.creator_email) ||
      !review.creator_email.includes('@') ||
      !review.image ||
      review.image.size === 0

    ) {
      return {
        message: 'Invalid input',
      };
    }

    
    await saveRreview(review);
    redirect('/reviews');
  }
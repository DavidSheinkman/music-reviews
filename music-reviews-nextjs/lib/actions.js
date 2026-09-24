'use server';

  export async function shareReview(formData) {

    const review = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      content: formData.get('content'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

  }
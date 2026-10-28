'use client';

import { useFormStatus } from 'react-dom';


export default function ReviewsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}    > 
            {pending ? 'Submitting...' : 'Share Review'}
        </button>
    );

}
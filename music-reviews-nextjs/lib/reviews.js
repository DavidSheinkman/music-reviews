import sql from 'better-sqlite3';

const db = new sql('reviews.db');

export async function getReviews() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    return db.prepare('SELECT * FROM reviews').all();
}

export function getReview(slug) {
    return db.prepare('SELECT * FROM reviews WHERE slug = ?').get(slug);
}
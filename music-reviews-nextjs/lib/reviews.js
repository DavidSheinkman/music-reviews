import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = new sql('reviews.db');

export async function getReviews() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    return db.prepare('SELECT * FROM reviews').all();
}

export function getReview(slug) {
    return db.prepare('SELECT * FROM reviews WHERE slug = ?').get(slug);
}

export async function saveRreview(review) {
    review.slug = slugify(review.title, { lower: true });
    review.content = xss(review.content);

    const extrnstion = review.image.name.split('.').pop();
    const fileName = `${review.slug}.${extrnstion}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await review.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }

    });

    review.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO reviews 
        (title, summary, content, creator, creator_email, image, slug) 
        VALUES (
            @title, 
            @summary, 
            @content, 
            @creator, 
            @creator_email, 
            @image, 
            @slug
        )
    `).run(review);


}
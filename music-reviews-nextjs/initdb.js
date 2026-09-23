const sql = require('better-sqlite3');
const db = sql('reviews.db');

const dummyReviews = [
  {
    title: 'Midnight Echoes',
    slug: 'midnight-echoes',
    image: '/images/midnight-echoes.jpg',
    summary:
      'A haunting synth-pop album that blends nostalgic 80s textures with modern production.',
    instructions: `
      1. First impressions:
         The opening track sets a moody, atmospheric tone with lush pads and a driving bassline.

      2. Standout tracks:
         "Neon Rain" and "Afterglow" showcase the artist's knack for catchy hooks layered over dark, cinematic soundscapes.

      3. Production quality:
         The mix is polished and spacious, giving each instrument room to breathe while keeping the low end tight.

      4. Overall verdict:
         A cohesive, emotionally resonant record that rewards repeat listens.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Fire & Spice',
    slug: 'fire-and-spice',
    image: '/images/fire-and-spice.jpg',
    summary:
      'A fiery, genre-bending hip-hop record infused with global rhythms and bold lyricism.',
    instructions: `
      1. First impressions:
         The album kicks off with aggressive percussion and sharp, confident verses.

      2. Standout tracks:
         "Curry Flow" blends traditional instrumentation with trap-inspired beats for a unique sound.

      3. Lyrical depth:
         The artist tackles themes of identity and heritage with wit and honesty throughout.

      4. Overall verdict:
         A spicy, adventurous project that pushes hip-hop into new territory.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Folded Harmonies',
    slug: 'folded-harmonies',
    image: '/images/folded-harmonies.jpg',
    summary:
      'A delicate indie-folk EP built around intricate vocal layering and gentle instrumentation.',
    instructions: `
      1. First impressions:
         Soft acoustic guitar and close vocal harmonies create an intimate, warm atmosphere.

      2. Standout tracks:
         "Steamed Silence" stands out for its minimalist arrangement and emotional restraint.

      3. Instrumentation:
         Subtle strings and light percussion are folded into the mix without overpowering the vocals.

      4. Overall verdict:
         A tender, understated collection best enjoyed with a quiet moment and full attention.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Comfort Chords',
    slug: 'comfort-chords',
    image: '/images/comfort-chords.jpg',
    summary:
      "A warm, familiar pop-rock album that's always an easy, feel-good listen.",
    instructions: `
      1. First impressions:
         Bright, jangly guitars and sing-along melodies dominate from the first track.

      2. Standout tracks:
         "Golden Crust" brings a nostalgic, radio-friendly hook that's hard to shake.

      3. Arrangement:
         The band layers harmonies and light synths over a solid rhythm section for a full, satisfying sound.

      4. Overall verdict:
         A comforting, crowd-pleasing record that hits the spot on repeat listens.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Slice of Napoli',
    slug: 'slice-of-napoli',
    image: '/images/slice-of-napoli.jpg',
    summary:
      'A vibrant, hand-crafted Italian pop record bursting with fresh melodies and bright arrangements.',
    instructions: `
      1. First impressions:
         The album opens with a lively accordion riff and a rising vocal melody that immediately grabs attention.

      2. Standout tracks:
         "Basil Nights" layers rich strings over a tangy, upbeat rhythm section.

      3. Production quality:
         The mix balances traditional Italian instrumentation with modern pop toppings.

      4. Overall verdict:
         Slice into this record hot and enjoy its warm, sun-soaked energy.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Golden Cutlet',
    slug: 'golden-cutlet',
    image: '/images/golden-cutlet.jpg',
    summary:
      'A crisp, classic-sounding Austrian rock record with a golden-era charm.',
    instructions: `
      1. First impressions:
         The opening riff is pounded out with an even, driving thickness that carries the whole record.

      2. Standout tracks:
         "Breaded Brass" coats a traditional melody in modern, crunchy guitar tones.

      3. Performance:
         Each instrument is fried into the mix until perfectly golden brown, with nothing overdone.

      4. Overall verdict:
         Best enjoyed hot, fresh out of the speakers, with a classic feel throughout.
    `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Fresh Vinyl Cuts',
    slug: 'fresh-vinyl-cuts',
    image: '/images/fresh-vinyl-cuts.jpg',
    summary:
      'A light and refreshing indie-pop single, ripe with bright melodies and a tangy groove.',
    instructions: `
      1. First impressions:
        The track opens with sliced, sparkling synth lines arranged over a laid-back beat.
    
      2. Vocal delivery:
         Airy, breathy vocals are sprinkled over the instrumental with light, seasoned phrasing.
    
      3. Mix and tone:
         Bright guitar tones and a touch of reverb give the track a tangy, summery edge.
    
      4. Overall verdict:
         A simple, flavorful single that works well as a light, feel-good listen.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS reviews (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO reviews VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const review of dummyReviews) {
    stmt.run(review);
  }
}

initData();

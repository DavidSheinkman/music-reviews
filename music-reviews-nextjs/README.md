# Afterhours Music Reviews

Afterhours Music Reviews is a music discovery and review app built with Next.js. It lets users browse album reviews, explore a community page, and submit their own music reviews with a title, summary, content, and cover image.

## Features

- Landing page with a music-focused hero section
- Reviews gallery for browsing submitted albums
- Individual review pages for detailed readouts
- Community page highlighting the app's social/music discussion theme
- Review submission form with validation and sanitization
- SQLite-backed data layer storing review entries
- Local image uploads saved into the public assets folder

## Tech Stack

- Next.js 15
- React 19
- better-sqlite3
- slugify
- xss
- CSS Modules

## Project Structure

```text
music-reviews-nextjs/
├── app/
│   ├── community/
│   ├── reviews/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── not-found.js
├── components/
├── lib/
├── public/
├── assets/
├── initdb.js
├── reviews.db
├── package.json
├── next.config.js
├── next.config.mjs
├── jsconfig.json
├── eslint.config.mjs
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or newer
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Initialize the database:

```bash
node initdb.js
```

This creates the `reviews.db` database file and inserts sample review data if it does not already exist.

3. Start the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Production Build

To create a production build:

```bash
npm run build
```

Then run the production server:

```bash
npm run start
```

## Data and Storage

The app uses a SQLite database named `reviews.db` to persist reviews. Review submissions also save uploaded cover images into the `public/images` directory and store the relative image path in the database.

## Notes

- The review submission flow validates required fields before saving.
- User-generated review text is sanitized before being stored.
- Slugs are generated automatically from the review title for clean URLs.

## License

This project is for local development and learning purposes.

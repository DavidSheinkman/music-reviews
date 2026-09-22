'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import AphexTwin from '@/assets/AphexTwin.avif';
import FatimaYamaha from '@/assets/FatimaYamaha.avif';
import FloatingPoints from '@/assets/FloatingPoints.avif';
import Gas from '@/assets/Gas.avif';
import Efdemin from '@/assets/Efdemin.avif';
import RivalConsoles from '@/assets/RivalConsoles.avif';
import Shx from '@/assets/Shx.avif';
import classes from './image-slideshow.module.css';

const images = [
  { image: AphexTwin, alt: 'Aphex Twin album cover' },
  { image: FloatingPoints, alt: 'Floating Points album cover' },
  { image: Gas, alt: 'Gas album cover' },
  { image: Efdemin, alt: 'Efdemin album cover' },
  { image: RivalConsoles, alt: 'Rival Consoles album cover' },
  { image: Shx, alt: 'SHXCXCHCXSH album cover' },
  { image: FatimaYamaha, alt: 'Fatima Yamaha album cover' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
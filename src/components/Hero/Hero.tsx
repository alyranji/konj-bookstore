'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { HeadphoneIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '../icons/Icons';

interface Slide {
  id: number;
  bgImage: string;
  floatingImage?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    bgImage: '/images/hero_bg1.png',
    title: 'کُنج، کتابخانه شخصی شما',
    subtitle: 'با بیش از ده هزار کتاب الکترونیکی در موضوعات متفاوت',
    ctaText: 'همین حالا بشنوید',
    ctaLink: '#audio-books',
  },
  {
    id: 2,
    bgImage: '/images/hero_bg2.png',
    floatingImage: '/images/hero_book.png',
    title: 'در لحظه با صداهای ماندگار',
    subtitle: 'بیش از هزار کتاب صوتی اختصاصی با صدای بهترین گویندگان در کُنج',
    ctaText: 'شروع گوش دادن',
    ctaLink: '#speakers',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            {/* Background Image */}
            <div className={styles.bgImageWrapper}>
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                priority={index === 0}
                className={styles.bgImage}
              />
              <div className={styles.gradientOverlay} />
            </div>

            {/* Optional Floating Artwork */}
            {slide.floatingImage && (
              <div className={styles.floatingArtwork}>
                <Image
                  src={slide.floatingImage}
                  alt="کتاب باز"
                  width={460}
                  height={380}
                  className={styles.bookImg}
                />
              </div>
            )}

            {/* Glassmorphism Content Card */}
            <div className={styles.contentCard}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <div className={styles.actionRow}>
                <a href={slide.ctaLink} className={styles.ctaButton}>
                  <HeadphoneIcon size={20} />
                  <span>{slide.ctaText}</span>
                </a>
                <a href="#samples" className={styles.sampleButton}>
                  <PlayIcon size={16} />
                  <span>شنیدن نمونه رایگان</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrows */}
        <button
          className={`${styles.arrow} ${styles.prevArrow}`}
          onClick={prevSlide}
          aria-label="اسلاید قبلی"
        >
          <ChevronRightIcon size={24} />
        </button>
        <button
          className={`${styles.arrow} ${styles.nextArrow}`}
          onClick={nextSlide}
          aria-label="اسلاید بعدی"
        >
          <ChevronLeftIcon size={24} />
        </button>

        {/* Pagination Dots */}
        <div className={styles.dots}>
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`رفتن به اسلاید ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


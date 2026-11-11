'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './PLPSection.module.css';
import { BookCard } from '../BookSection/BookCard';
import { Book } from '@/data/mockData';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

interface PLPSectionProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
  badge?: string;
}

export const PLPSection: React.FC<PLPSectionProps> = ({
  title,
  books,
  viewAllLink = '#',
  badge,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.titleBar}>
        <div className={styles.titleGroup}>
          <span className={styles.accentBar} />
          <h2 className={styles.title}>{title}</h2>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

        <div className={styles.actions}>
          <Link href={viewAllLink} className={styles.viewAll}>
            <span>مشاهده همه</span>
            <ChevronLeftIcon size={14} />
          </Link>

          <div className={styles.navButtons}>
            <button
              className={styles.navBtn}
              onClick={() => scroll('right')}
              aria-label="کتاب‌های بعدی"
            >
              <ChevronRightIcon size={18} />
            </button>
            <button
              className={styles.navBtn}
              onClick={() => scroll('left')}
              aria-label="کتاب‌های قبلی"
            >
              <ChevronLeftIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.carouselTrack} ref={scrollRef}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

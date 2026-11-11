'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './BookSection.module.css';
import { BookCard } from './BookCard';
import { Book } from '@/data/mockData';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

interface BookSectionProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
  badge?: string;
}

export const BookSection: React.FC<BookSectionProps> = ({
  title,
  books,
  viewAllLink = '#',
  badge,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title Bar */}
        <div className={styles.titleBar}>
          <div className={styles.titleGroup}>
            <span className={styles.accentBar} />
            <h2 className={styles.title}>{title}</h2>
            {badge && <span className={styles.badge}>{badge}</span>}
          </div>

          <div className={styles.actions}>
            <Link href={viewAllLink} className={styles.viewAll}>
              <span>مشاهده همه</span>
              <ChevronLeftIcon size={16} />
            </Link>

            <div className={styles.navButtons}>
              <button
                className={styles.navBtn}
                onClick={() => scroll('right')}
                aria-label="کتاب‌های بعدی"
              >
                <ChevronRightIcon size={20} />
              </button>
              <button
                className={styles.navBtn}
                onClick={() => scroll('left')}
                aria-label="کتاب‌های قبلی"
              >
                <ChevronLeftIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Track */}
        <div className={styles.carouselTrack} ref={scrollRef}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};


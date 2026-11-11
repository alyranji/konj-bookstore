import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BookSynopsis.module.css';
import { SYNOPSES } from '@/data/mockData';
import { ChevronLeftIcon, BookIcon } from '../icons/Icons';

export const BookSynopsis: React.FC = () => {
  return (
    <section className={styles.section} aria-label="خلاصه و نقد کتاب‌های برگزیده">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <span className={styles.accentBar} />
            <h2 className={styles.title}>خلاصه و مرور کتاب‌های برگزیده</h2>
          </div>
          <span className={styles.subtitle}>قبل از خرید، گزیده‌ای از کتاب را بخوانید</span>
        </div>

        <div className={styles.cardsGrid}>
          {SYNOPSES.map((syn) => (
            <div key={syn.id} className={styles.synopsisCard}>
              <div className={styles.coverSection}>
                <div className={styles.coverWrapper}>
                  <Image
                    src={syn.cover}
                    alt={syn.title}
                    width={110}
                    height={165}
                    className={styles.cover}
                  />
                </div>
              </div>

              <div className={styles.textSection}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.bookTitle}>{syn.title}</h3>
                  <span className={styles.author}>{syn.author}</span>
                </div>

                <p className={styles.synopsisText}>{syn.text}</p>

                <Link href={`#synopsis-${syn.id}`} className={styles.readMore}>
                  <BookIcon size={16} />
                  <span>ادامه مرور و دانلود فصل اول</span>
                  <ChevronLeftIcon size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


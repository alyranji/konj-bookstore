import React from 'react';
import Image from 'next/image';
import styles from './AuthorQuotes.module.css';
import { AUTHOR_QUOTES } from '@/data/mockData';
import { QuoteIcon } from '../icons/Icons';

export const AuthorQuotes: React.FC = () => {
  return (
    <section className={styles.section} aria-label="جملات ماندگار نویسندگان">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <span className={styles.accentBar} />
          <h2 className={styles.title}>جملات ماندگار از نویسندگان بزرگ</h2>
        </div>

        <div className={styles.quotesGrid}>
          {AUTHOR_QUOTES.map((item) => (
            <div key={item.id} className={styles.quoteCard}>
              <div className={styles.quoteIconWrapper}>
                <QuoteIcon size={26} className={styles.quoteIcon} />
              </div>

              <p className={styles.quoteText}>{item.quote}</p>

              <div className={styles.authorFooter}>
                <div className={styles.authorAvatarWrapper}>
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={72}
                    height={72}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorYears}>{item.years}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


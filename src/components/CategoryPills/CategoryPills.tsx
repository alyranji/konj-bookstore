import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryPills.module.css';
import { CATEGORIES } from '@/data/mockData';

export const CategoryPills: React.FC = () => {
  return (
    <section className={styles.section} aria-label="دسته‌بندی‌های برگزیده">
      <div className={styles.container}>
        {CATEGORIES.map((cat) => (
          <Link key={cat.id} href={`#${cat.slug}`} className={styles.pillCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={cat.image}
                alt={cat.title}
                width={64}
                height={64}
                className={styles.image}
              />
            </div>
            <span className={styles.title}>{cat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};


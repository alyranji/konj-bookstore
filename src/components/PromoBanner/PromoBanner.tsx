import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PromoBanner.module.css';
import { ChevronLeftIcon } from '../icons/Icons';

export interface PromoBannerProps {
  title: string;
  subtitle: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
  imageAlt: string;
  theme?: 'purple' | 'amber' | 'dark';
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  subtitle,
  badge,
  ctaText = 'مشاهده و خرید',
  ctaLink = '#',
  image,
  imageAlt,
  theme = 'purple',
}) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.bannerCard} ${styles[theme]}`}>
        {/* Content Column */}
        <div className={styles.content}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <Link href={ctaLink} className={styles.ctaButton}>
            <span>{ctaText}</span>
            <ChevronLeftIcon size={18} />
          </Link>
        </div>

        {/* Artwork Image */}
        <div className={styles.artwork}>
          <Image
            src={image}
            alt={imageAlt}
            width={340}
            height={340}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};


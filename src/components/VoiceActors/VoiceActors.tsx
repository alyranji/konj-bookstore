import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './VoiceActors.module.css';
import { SPEAKERS } from '@/data/mockData';
import { HeadphoneIcon, ChevronLeftIcon } from '../icons/Icons';

export const VoiceActors: React.FC = () => {
  return (
    <section className={styles.section} id="speakers" aria-label="صداهای ماندگار و راویان">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <span className={styles.accentBar} />
            <h2 className={styles.title}>صداهای ماندگار :</h2>
          </div>
          <Link href="#all-narrators" className={styles.viewAll}>
            <span>مشاهده همه راویان</span>
            <ChevronLeftIcon size={16} />
          </Link>
        </div>

        <div className={styles.speakersList}>
          {SPEAKERS.map((speaker) => (
            <Link key={speaker.id} href={`#narrator-${speaker.id}`} className={styles.speakerCard}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={120}
                  height={120}
                  className={styles.avatar}
                />
                <div className={styles.badge}>
                  <HeadphoneIcon size={14} />
                  <span>{new Intl.NumberFormat('fa-IR').format(speaker.audioCount)}</span>
                </div>
              </div>

              <h3 className={styles.name}>{speaker.name}</h3>
              <span className={styles.role}>{speaker.role}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


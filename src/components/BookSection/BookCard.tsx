import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BookCard.module.css';
import { Book } from '@/data/mockData';
import { StarIcon, HeadphoneIcon, BookIcon, CartIcon } from '../icons/Icons';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <article className={styles.card}>
      <div className={styles.coverContainer}>
        {/* Discount Badge */}
        {book.discountPercent && (
          <div className={styles.discountBadge}>
            <span>٪{new Intl.NumberFormat('fa-IR').format(book.discountPercent)}</span>
          </div>
        )}

        {/* Media Type Icon Badge */}
        <div className={styles.mediaBadge}>
          {book.isAudio ? (
            <HeadphoneIcon size={14} className={styles.audioIcon} />
          ) : (
            <BookIcon size={14} className={styles.textIcon} />
          )}
        </div>

        {/* Cover Image */}
        <div className={styles.coverWrapper}>
          <Image
            src={book.cover}
            alt={book.title}
            width={130}
            height={195}
            className={styles.coverImage}
          />
        </div>

        {/* Quick Add Overlay */}
        <div className={styles.overlay}>
          <button className={styles.quickAddButton} title="افزودن به سبد خرید">
            <CartIcon size={18} />
            <span>خرید سریع</span>
          </button>
        </div>
      </div>

      {/* Book Metadata */}
      <div className={styles.info}>
        <h3 className={styles.title} title={book.title}>
          <Link href={`#book-${book.id}`}>{book.title}</Link>
        </h3>

        <div className={styles.authorRow}>
          <span className={styles.author}>{book.author}</span>
          {book.narrator && (
            <span className={styles.narrator}>با صدای {book.narrator}</span>
          )}
        </div>

        {/* Rating */}
        <div className={styles.ratingRow}>
          <div className={styles.stars}>
            <StarIcon size={14} />
            <span className={styles.ratingValue}>
              {new Intl.NumberFormat('fa-IR', { minimumFractionDigits: 1 }).format(book.rating)}
            </span>
          </div>
          <span className={styles.reviewCount}>
            ({new Intl.NumberFormat('fa-IR').format(book.reviewCount)})
          </span>
        </div>

        <div className={styles.divider} />

        {/* Pricing */}
        <div className={styles.priceRow}>
          {book.discountedPrice ? (
            <div className={styles.priceContainer}>
              <div className={styles.oldPrice}>
                {formatPrice(book.price)}
              </div>
              <div className={styles.finalPrice}>
                <span className={styles.amount}>{formatPrice(book.discountedPrice)}</span>
                <span className={styles.currency}>تومان</span>
              </div>
            </div>
          ) : (
            <div className={styles.priceContainer}>
              <div className={styles.finalPrice}>
                <span className={styles.amount}>{formatPrice(book.price)}</span>
                <span className={styles.currency}>تومان</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};


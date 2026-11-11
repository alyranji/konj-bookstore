'use client';

import React, { useState } from 'react';
import styles from './AllBooksGrid.module.css';
import { BookCard } from '../BookSection/BookCard';
import { Book } from '@/data/mockData';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

interface AllBooksGridProps {
  books: Book[];
}

export const AllBooksGrid: React.FC<AllBooksGridProps> = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 24;

  return (
    <div className={styles.gridSection}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.accentBar} />
          <h2 className={styles.title}>همه کتاب‌های این دسته</h2>
        </div>
        <span className={styles.subtitle}>
          نمایش {(currentPage - 1) * 12 + 1} تا {Math.min(currentPage * 12, 1420)} از ۱,۴۲۰ کتاب
        </span>
      </div>

      <div className={styles.booksGrid}>
        {books.map((book) => (
          <div key={book.id} className={styles.gridItem}>
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className={styles.pagination} aria-label="صفحه‌بندی نتایج">
        <button
          className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabled : ''}`}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <ChevronRightIcon size={16} />
          <span>صفحه قبل</span>
        </button>

        <div className={styles.pageNumbers}>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`${styles.numberBtn} ${
                currentPage === page ? styles.activeNumber : ''
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {new Intl.NumberFormat('fa-IR').format(page)}
            </button>
          ))}
          <span className={styles.dots}>...</span>
          <button
            className={`${styles.numberBtn} ${
              currentPage === totalPages ? styles.activeNumber : ''
            }`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {new Intl.NumberFormat('fa-IR').format(totalPages)}
          </button>
        </div>

        <button
          className={`${styles.pageBtn} ${
            currentPage === totalPages ? styles.disabled : ''
          }`}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          <span>صفحه بعد</span>
          <ChevronLeftIcon size={16} />
        </button>
      </nav>
    </div>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PLPToolbar.module.css';
import { ChevronLeftIcon } from '../icons/Icons';

export type SortOption =
  | 'newest'
  | 'bestselling'
  | 'popular'
  | 'discount'
  | 'price_asc'
  | 'price_desc';

interface PLPToolbarProps {
  totalCount: number;
  activeSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  onOpenMobileFilters: () => void;
}

const SORT_TABS: { id: SortOption; label: string }[] = [
  { id: 'newest', label: 'جدیدترین‌ها' },
  { id: 'bestselling', label: 'پرفروش‌ترین‌ها' },
  { id: 'popular', label: 'محبوب‌ترین‌ها' },
  { id: 'discount', label: 'بیشترین تخفیف' },
  { id: 'price_asc', label: 'ارزان‌ترین' },
  { id: 'price_desc', label: 'گران‌ترین' },
];

export const PLPToolbar: React.FC<PLPToolbarProps> = ({
  totalCount,
  activeSort,
  onSelectSort,
  onOpenMobileFilters,
}) => {
  return (
    <div className={styles.toolbarContainer}>
      {/* Breadcrumb Row */}
      <nav className={styles.breadcrumb} aria-label="مسیر راهنما">
        <Link href="/" className={styles.crumbLink}>
          خانه
        </Link>
        <ChevronLeftIcon size={14} className={styles.crumbSep} />
        <Link href="/books" className={styles.crumbLink}>
          کتاب متنی
        </Link>
        <ChevronLeftIcon size={14} className={styles.crumbSep} />
        <span className={styles.crumbActive}>همه موضوعات</span>
      </nav>

      {/* Sorting & Stats Row */}
      <div className={styles.sortBar}>
        <div className={styles.sortOptions}>
          <div className={styles.sortLabelGroup}>
            <span className={styles.sortIconIndicator}>⇅</span>
            <span className={styles.sortLabel}>مرتب‌سازی:</span>
          </div>

          <div className={styles.tabsList}>
            {SORT_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${
                  activeSort === tab.id ? styles.activeTab : ''
                }`}
                onClick={() => onSelectSort(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Total Count */}
        <div className={styles.stats}>
          <span className={styles.countNumber}>
            {new Intl.NumberFormat('fa-IR').format(totalCount)}
          </span>
          <span className={styles.countText}>عنوان کتاب</span>
        </div>

        {/* Mobile Filter Trigger Button */}
        <button
          className={styles.mobileFilterBtn}
          onClick={onOpenMobileFilters}
          aria-label="نمایش فیلترها"
        >
          <span>فیلتر و دسته‌بندی‌ها</span>
          <span className={styles.filterPillBadge}>۳</span>
        </button>
      </div>
    </div>
  );
};

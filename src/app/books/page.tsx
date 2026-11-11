'use client';

import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { PLPSidebar } from '@/components/PLP/PLPSidebar';
import { PLPToolbar, SortOption } from '@/components/PLP/PLPToolbar';
import { PLPSection } from '@/components/PLP/PLPSection';
import { AllBooksGrid } from '@/components/PLP/AllBooksGrid';
import {
  NEW_BOOKS,
  DISCOUNTED_BOOKS,
  AUDIO_BOOKS,
  PLP_BESTSELLERS,
  PLP_DISCOUNT_70,
  Book,
} from '@/data/mockData';

export default function BooksPLPPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);
  const [activeSort, setActiveSort] = useState<SortOption>('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const togglePublisher = (pub: string) => {
    setSelectedPublishers((prev) =>
      prev.includes(pub) ? prev.filter((p) => p !== pub) : [...prev, pub]
    );
  };

  const toggleAuthor = (auth: string) => {
    setSelectedAuthors((prev) =>
      prev.includes(auth) ? prev.filter((a) => a !== auth) : [...prev, auth]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedPublishers([]);
    setSelectedAuthors([]);
    setOnlyDiscounted(false);
  };

  // Combine books for grid
  const allTextBooks = useMemo(() => {
    const list: Book[] = [
      ...NEW_BOOKS,
      ...DISCOUNTED_BOOKS,
      ...PLP_BESTSELLERS,
      ...PLP_DISCOUNT_70,
    ];

    // Filter
    let filtered = list.filter((book) => {
      if (onlyDiscounted && !book.discountPercent) return false;
      if (selectedPublishers.length > 0 && book.publisher && !selectedPublishers.includes(book.publisher)) {
        return false;
      }
      if (selectedAuthors.length > 0 && !selectedAuthors.includes(book.author)) {
        return false;
      }
      return true;
    });

    // Deduplicate by ID
    const seen = new Set<string>();
    filtered = filtered.filter((b) => {
      if (seen.has(b.id)) return false;
      seen.add(b.id);
      return true;
    });

    // Sort
    if (activeSort === 'price_asc') {
      filtered.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
    } else if (activeSort === 'price_desc') {
      filtered.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
    } else if (activeSort === 'discount') {
      filtered.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
    } else if (activeSort === 'popular' || activeSort === 'bestselling') {
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return filtered;
  }, [onlyDiscounted, selectedPublishers, selectedAuthors, activeSort]);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.layoutRow}>
          {/* Main Content Area (Left side in RTL) */}
          <div className={styles.contentColumn}>
            {/* Toolbar (Breadcrumb + Sort Tabs + Count) */}
            <PLPToolbar
              totalCount={1420}
              activeSort={activeSort}
              onSelectSort={setActiveSort}
              onOpenMobileFilters={() => setMobileFiltersOpen(true)}
            />

            {/* Figma Section 1: جدید ترین کتاب های متنی */}
            <PLPSection
              title="جدید ترین کتاب های متنی"
              books={NEW_BOOKS}
              badge="تازه‌های این هفته"
            />

            {/* Figma Section 2: پرفروش ترین کتاب های ماه گذشته */}
            <PLPSection
              title="پرفروش ترین کتاب های ماه گذشته"
              books={PLP_BESTSELLERS}
              badge="پیشنهاد ویژه"
            />

            {/* Figma Section 3: محبوب ترین های متنی */}
            <PLPSection
              title="محبوب ترین های متنی"
              books={DISCOUNTED_BOOKS}
            />

            {/* Figma Section 4: تا ۷۰ ٪ تخفیف کتاب های متنی */}
            <PLPSection
              title="تا ۷۰ ٪ تخفیف کتاب های متنی"
              books={PLP_DISCOUNT_70}
              badge="تخفیف شگفت‌انگیز"
            />

            {/* Figma Section 5: از ناشران محبوب متنی */}
            <PLPSection
              title="از ناشران محبوب متنی"
              books={[...PLP_BESTSELLERS].reverse()}
            />

            {/* Figma Section 6: تازه های روانشناسی */}
            <PLPSection
              title="تازه های روانشناسی"
              books={NEW_BOOKS.filter((b) => b.category === 'psychology' || b.category === 'philosophy')}
            />

            {/* Complete Paginated Grid */}
            <AllBooksGrid books={allTextBooks} />
          </div>

          {/* Filter Sidebar (Right side in RTL) */}
          <PLPSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedPublishers={selectedPublishers}
            onTogglePublisher={togglePublisher}
            selectedAuthors={selectedAuthors}
            onToggleAuthor={toggleAuthor}
            onlyDiscounted={onlyDiscounted}
            onToggleOnlyDiscounted={() => setOnlyDiscounted(!onlyDiscounted)}
            onResetFilters={resetFilters}
          />
        </div>
      </main>

      {/* Mobile Filters Drawer Modal */}
      {mobileFiltersOpen && (
        <div className={styles.mobileModalBackdrop} onClick={() => setMobileFiltersOpen(false)}>
          <div
            className={styles.mobileModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <PLPSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedPublishers={selectedPublishers}
              onTogglePublisher={togglePublisher}
              selectedAuthors={selectedAuthors}
              onToggleAuthor={toggleAuthor}
              onlyDiscounted={onlyDiscounted}
              onToggleOnlyDiscounted={() => setOnlyDiscounted(!onlyDiscounted)}
              onResetFilters={resetFilters}
              isMobileDrawer
              onCloseMobileDrawer={() => setMobileFiltersOpen(false)}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

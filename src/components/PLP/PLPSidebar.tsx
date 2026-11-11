'use client';

import React, { useState } from 'react';
import styles from './PLPSidebar.module.css';
import {
  PLP_FILTER_CATEGORIES,
  PLP_PUBLISHERS,
  PLP_AUTHORS,
} from '@/data/mockData';
import { ChevronDownIcon, SearchIcon, CloseIcon } from '../icons/Icons';

interface PLPSidebarProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  selectedPublishers: string[];
  onTogglePublisher: (name: string) => void;
  selectedAuthors: string[];
  onToggleAuthor: (name: string) => void;
  onlyDiscounted: boolean;
  onToggleOnlyDiscounted: () => void;
  onResetFilters: () => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const PLPSidebar: React.FC<PLPSidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedPublishers,
  onTogglePublisher,
  selectedAuthors,
  onToggleAuthor,
  onlyDiscounted,
  onToggleOnlyDiscounted,
  onResetFilters,
  isMobileDrawer = false,
  onCloseMobileDrawer,
}) => {
  const [authorSearch, setAuthorSearch] = useState('');
  const [publisherSearch, setPublisherSearch] = useState('');
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  const filteredAuthors = PLP_AUTHORS.filter((a) =>
    a.name.includes(authorSearch)
  );
  const filteredPublishers = PLP_PUBLISHERS.filter((p) =>
    p.name.includes(publisherSearch)
  );

  return (
    <aside className={`${styles.sidebar} ${isMobileDrawer ? styles.mobileDrawer : ''}`}>
      {/* Mobile Drawer Header */}
      {isMobileDrawer && (
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>فیلترهای پیشرفته</h3>
          <button
            onClick={onCloseMobileDrawer}
            className={styles.closeDrawerBtn}
            aria-label="بستن فیلترها"
          >
            <CloseIcon size={22} />
          </button>
        </div>
      )}

      {/* Filter Reset Header */}
      <div className={styles.filterOverviewCard}>
        <div className={styles.overviewHeader}>
          <span className={styles.overviewTitle}>فیلترهای اعمال‌شده</span>
          <button onClick={onResetFilters} className={styles.resetBtn}>
            حذف همه فیلترها
          </button>
        </div>

        {/* Quick Toggles */}
        <div className={styles.togglesGroup}>
          <label className={styles.toggleRow}>
            <span className={styles.toggleLabel}>فقط کتاب‌های تخفیف‌دار</span>
            <input
              type="checkbox"
              checked={onlyDiscounted}
              onChange={onToggleOnlyDiscounted}
              className={styles.switchInput}
            />
            <span className={styles.switchSlider} />
          </label>
        </div>
      </div>

      {/* 1. Category Tree Filter */}
      <div className={styles.filterCard}>
        <button
          className={styles.cardHeader}
          onClick={() => setCategoriesExpanded(!categoriesExpanded)}
        >
          <span className={styles.cardTitle}>دسته‌بندی موضوعی</span>
          <ChevronDownIcon
            size={16}
            className={`${styles.chevron} ${categoriesExpanded ? styles.rotate : ''}`}
          />
        </button>

        {categoriesExpanded && (
          <div className={styles.categoryTree}>
            <div className={styles.activeRoot}>
              <span className={styles.rootDot} />
              <span className={styles.rootText}>کتاب متنی</span>
            </div>

            <ul className={styles.categoryList}>
              {PLP_FILTER_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`${styles.categoryBtn} ${
                      selectedCategory === cat.id ? styles.activeCategory : ''
                    }`}
                    onClick={() => onSelectCategory(cat.id)}
                  >
                    <span>{cat.title}</span>
                    <span className={styles.countBadge}>
                      {new Intl.NumberFormat('fa-IR').format(cat.count)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 2. Format / Content Type */}
      <div className={styles.filterCard}>
        <div className={styles.cardHeaderStatic}>
          <span className={styles.cardTitle}>نوع محتوا</span>
        </div>
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" defaultChecked />
            <span className={styles.checkboxCustom} />
            <span className={styles.checkboxText}>کتاب متنی (EPUB / PDF)</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span className={styles.checkboxCustom} />
            <span className={styles.checkboxText}>کتاب صوتی</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span className={styles.checkboxCustom} />
            <span className={styles.checkboxText}>پادکست اختصاصی</span>
          </label>
        </div>
      </div>

      {/* 3. Publishers Filter with Search */}
      <div className={styles.filterCard}>
        <div className={styles.cardHeaderStatic}>
          <span className={styles.cardTitle}>ناشر</span>
        </div>

        <div className={styles.innerSearch}>
          <SearchIcon size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="جستجوی ناشر..."
            value={publisherSearch}
            onChange={(e) => setPublisherSearch(e.target.value)}
            className={styles.innerInput}
          />
        </div>

        <div className={styles.checkboxListScroll}>
          {filteredPublishers.map((pub) => {
            const isChecked = selectedPublishers.includes(pub.name);
            return (
              <label key={pub.id} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onTogglePublisher(pub.name)}
                />
                <span className={styles.checkboxCustom} />
                <span className={styles.checkboxText}>{pub.name}</span>
                <span className={styles.countSub}>
                  ({new Intl.NumberFormat('fa-IR').format(pub.count)})
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. Authors Filter with Search */}
      <div className={styles.filterCard}>
        <div className={styles.cardHeaderStatic}>
          <span className={styles.cardTitle}>نویسنده</span>
        </div>

        <div className={styles.innerSearch}>
          <SearchIcon size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="جستجوی نویسنده..."
            value={authorSearch}
            onChange={(e) => setAuthorSearch(e.target.value)}
            className={styles.innerInput}
          />
        </div>

        <div className={styles.checkboxListScroll}>
          {filteredAuthors.map((auth) => {
            const isChecked = selectedAuthors.includes(auth.name);
            return (
              <label key={auth.id} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleAuthor(auth.name)}
                />
                <span className={styles.checkboxCustom} />
                <span className={styles.checkboxText}>{auth.name}</span>
                <span className={styles.countSub}>
                  ({new Intl.NumberFormat('fa-IR').format(auth.count)})
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

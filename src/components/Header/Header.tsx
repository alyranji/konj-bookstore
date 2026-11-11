'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import {
  LogoIcon,
  SearchIcon,
  CartIcon,
  UserIcon,
  LibraryIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  HeadphoneIcon,
  BookIcon,
} from '../icons/Icons';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="منوی سایت"
        >
          {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Brand / Logo */}
        <Link href="/" className={styles.logo}>
          <LogoIcon size={38} />
          <div className={styles.logoText}>
            <span className={styles.brandName}>کُنج</span>
            <span className={styles.brandTagline}>کتابخانه شخصی شما</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className={styles.searchWrapper}>
          <SearchIcon size={20} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="کتاب ، نویسنده یا موضوع رو بنویس..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Actions (Left in RTL layout) */}
        <div className={styles.actions}>
          <Link href="#library" className={styles.libraryButton}>
            <LibraryIcon size={20} />
            <span>کتابخانه من</span>
          </Link>

          <Link href="#cart" className={styles.cartButton} aria-label="سبد خرید">
            <CartIcon size={22} />
            <span className={styles.cartBadge}>۴</span>
          </Link>

          <div className={styles.profileButton}>
            <UserIcon size={20} />
            <ChevronDownIcon size={14} />
          </div>
        </div>
      </div>

      {/* Navigation Links Bar */}
      <nav className={`${styles.navBar} ${mobileMenuOpen ? styles.navBarOpen : ''}`}>
        <div className={styles.navContainer}>
          {/* Categories Dropdown */}
          <div className={styles.categoryDropdownWrapper}>
            <button
              className={styles.categoryButton}
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <span>دسته‌بندی‌ها</span>
              <ChevronDownIcon
                size={16}
                className={`${styles.chevron} ${categoryOpen ? styles.rotate : ''}`}
              />
            </button>

            {categoryOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="#novels" className={styles.dropdownItem}>
                  <BookIcon size={18} />
                  <span>رمان و ادبیات داستانی</span>
                </Link>
                <Link href="#psychology" className={styles.dropdownItem}>
                  <BookIcon size={18} />
                  <span>روانشناسی و خودیاری</span>
                </Link>
                <Link href="#audiobooks" className={styles.dropdownItem}>
                  <HeadphoneIcon size={18} />
                  <span>کتاب‌های صوتی اختصاصی</span>
                </Link>
                <Link href="#history" className={styles.dropdownItem}>
                  <BookIcon size={18} />
                  <span>تاریخی و علوم سیاسی</span>
                </Link>
                <Link href="#business" className={styles.dropdownItem}>
                  <BookIcon size={18} />
                  <span>کسب‌وکار و مدیریت</span>
                </Link>
              </div>
            )}
          </div>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/books" className={styles.navLink}>
                کتاب‌های متنی
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#audio-books" className={styles.navLink}>
                کتاب‌های صوتی
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#podcasts" className={styles.navLink}>
                پادکست‌ها
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#new-releases" className={styles.navLink}>
                تازه‌ها
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#bestsellers" className={styles.navLink}>
                پرفروش‌ترین‌ها
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#discounts" className={styles.navLinkHighlight}>
                تخفیف‌های شگفت‌انگیز
              </Link>
            </li>
          </ul>

          <div className={styles.downloadApp}>
            <Link href="#download" className={styles.downloadLink}>
              <span className={styles.downloadDot} />
              <span>دانلود اپلیکیشن کُنج</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};


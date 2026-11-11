import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { LogoIcon, HeadphoneIcon, BookIcon } from '../icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="download">
      {/* Top App Download CTA Banner */}
      <div className={styles.appBanner}>
        <div className={styles.appBannerContainer}>
          <div className={styles.appText}>
            <h3 className={styles.appTitle}>همیشه و همه‌جا کتابخانه کُنج را همراه داشته باشید</h3>
            <p className={styles.appDesc}>
              با نصب اپلیکیشن اندروید و iOS کنج، به هزاران کتاب الکترونیکی و صوتی به صورت آفلاین دسترسی داشته باشید.
            </p>
          </div>

          <div className={styles.appBadges}>
            <a href="#app-store" className={styles.badgeBtn}>
              <div className={styles.badgeText}>
                <span className={styles.badgeLabel}>دریافت نسخه iOS</span>
                <span className={styles.badgeStore}>App Store</span>
              </div>
            </a>

            <a href="#google-play" className={styles.badgeBtn}>
              <div className={styles.badgeText}>
                <span className={styles.badgeLabel}>دریافت نسخه اندروید</span>
                <span className={styles.badgeStore}>Google Play</span>
              </div>
            </a>

            <a href="#bazaar" className={styles.badgeBtn}>
              <div className={styles.badgeText}>
                <span className={styles.badgeLabel}>دریافت از</span>
                <span className={styles.badgeStore}>کافه بازار</span>
              </div>
            </a>

            <a href="#myket" className={styles.badgeBtn}>
              <div className={styles.badgeText}>
                <span className={styles.badgeLabel}>دریافت از</span>
                <span className={styles.badgeStore}>مایکت</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className={styles.columnsContainer}>
          {/* Brand & About */}
          <div className={styles.aboutCol}>
            <div className={styles.logoRow}>
              <LogoIcon size={36} />
              <div className={styles.logoInfo}>
                <span className={styles.brandTitle}>کُنج</span>
                <span className={styles.brandTagline}>کتاب، کتاب صوتی و پادکست</span>
              </div>
            </div>
            <p className={styles.aboutText}>
              کنج پلتفرم جامع مطالعه و شنیدن کتاب‌های صوتی و متنی است. با کنج، هر لحظه از زندگی خود را به فرصتی برای یادگیری و آرامش تبدیل کنید.
            </p>
            <div className={styles.contactInfo}>
              <span>تلفن پشتیبانی: ۰۲۱-۹۱۰۰۲۴۲۴</span>
              <span>ایمیل: support@konj.ir</span>
            </div>
          </div>

          {/* Column 1: Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>دسته‌بندی‌های برگزیده</h4>
            <ul className={styles.linkList}>
              <li><Link href="#foreign-novels">رمان و ادبیات خارجی</Link></li>
              <li><Link href="#psychology">روانشناسی و موفقیت</Link></li>
              <li><Link href="#audio-exclusive">کتاب‌های صوتی اختصاصی</Link></li>
              <li><Link href="#history">کتاب‌های تاریخی و فلسفی</Link></li>
              <li><Link href="#business">مدیریت و اقتصاد</Link></li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>خدمات مشتریان</h4>
            <ul className={styles.linkList}>
              <li><Link href="#faq">پرسش‌های متداول</Link></li>
              <li><Link href="#help">راهنمای خرید و فعال‌سازی</Link></li>
              <li><Link href="#privacy">قوانین و حریم خصوصی</Link></li>
              <li><Link href="#terms">شرایط بازگرداندن سفارش</Link></li>
              <li><Link href="#publishers">همکاری با ناشران و گویندگان</Link></li>
            </ul>
          </div>

          {/* Column 3: Trust Badges */}
          <div className={styles.badgesCol}>
            <h4 className={styles.colTitle}>مجوزها و نمادهای اعتماد</h4>
            <div className={styles.trustBoxes}>
              <div className={styles.trustBox}>
                <span className={styles.trustName}>اینماد</span>
                <span className={styles.trustSub}>مرکز توسعه تجارت</span>
              </div>
              <div className={styles.trustBox}>
                <span className={styles.trustName}>ساماندهی</span>
                <span className={styles.trustSub}>وزارت فرهنگ و ارشاد</span>
              </div>
              <div className={styles.trustBox}>
                <span className={styles.trustName}>نشر برخط</span>
                <span className={styles.trustSub}>عضو اتحادیه ناشران</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightRow}>
          <p className={styles.copyText}>
            تمامی حقوق مادی و معنوی این وب‌سایت محفوظ و متعلق به فروشگاه اینترنتی کُنج می‌باشد. © ۲۰۲۶
          </p>
          <div className={styles.socialLinks}>
            <a href="#instagram" aria-label="اینستاگرام">اینستاگرام</a>
            <span>•</span>
            <a href="#telegram" aria-label="تلگرام">تلگرام</a>
            <span>•</span>
            <a href="#twitter" aria-label="توییتر">توییتر</a>
            <span>•</span>
            <a href="#linkedin" aria-label="لینکدین">لینکدین</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


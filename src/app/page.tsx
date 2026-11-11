import React from 'react';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { CategoryPills } from '@/components/CategoryPills/CategoryPills';
import { BookSection } from '@/components/BookSection/BookSection';
import { PromoBanner } from '@/components/PromoBanner/PromoBanner';
import { AuthorQuotes } from '@/components/AuthorQuotes/AuthorQuotes';
import { BookSynopsis } from '@/components/BookSynopsis/BookSynopsis';
import { VoiceActors } from '@/components/VoiceActors/VoiceActors';
import { Footer } from '@/components/Footer/Footer';
import { NEW_BOOKS, DISCOUNTED_BOOKS, AUDIO_BOOKS } from '@/data/mockData';

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navigation Header */}
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Banner Carousel */}
        <Hero />

        {/* Categories Under Hero */}
        <CategoryPills />

        {/* Section 1: Newest Books */}
        <BookSection
          title="جدید ترین کتاب ها :"
          books={NEW_BOOKS}
          badge="تازه‌های این هفته"
          viewAllLink="#new-books"
        />

        {/* Section 2: Discounted Books */}
        <BookSection
          title="تا ۳۰ درصد تخفیف :"
          books={DISCOUNTED_BOOKS}
          badge="پیشنهاد شگفت‌انگیز"
          viewAllLink="#discounts"
        />

        {/* Promotional Banner 1: George Orwell */}
        <PromoBanner
          title="مجموعه آثار جورج اورول"
          subtitle="نویسنده سرشناس کتاب مزرعه حیوانات و ۱۹۸۴ با تخفیف ویژه زمستانه"
          badge="فقط تا پایان زمستان با ۲۰٪ تخفیف بیشتر"
          ctaText="مشاهده آثار جورج اورول"
          ctaLink="#orwell"
          image="/images/banner_animal_farm.png"
          imageAlt="کتاب قلعه حیوانات اثر جورج اورول"
          theme="purple"
        />

        {/* Section 3: Audiobooks with Discount */}
        <BookSection
          title="تا ۳۰ درصد تخفیف کتاب های صوتی :"
          books={AUDIO_BOOKS}
          badge="با صدای گویندگان مطرح"
          viewAllLink="#audio-discounts"
        />

        {/* Promotional Banner 2: Kelidar - Mahmoud Dowlatabadi */}
        <PromoBanner
          title="کلیدر ، اثری به یادماندنی از محمود دولت آبادی"
          subtitle="بزرگترین رمان معاصر فارسی با روایت حماسی و تخفیف ویژه برای علاقه مندان به ادبیات کهن"
          badge="برای دریافت تا ۲۵٪ تخفیف کلیک کنید"
          ctaText="خرید دوره کامل کلیدر"
          ctaLink="#kelidar"
          image="/images/banner_kelidar.png"
          imageAlt="رمان کلیدر اثر محمود دولت آبادی"
          theme="amber"
        />

        {/* Author Quotes Showcase */}
        <AuthorQuotes />

        {/* Section 4: Best Audiobooks */}
        <BookSection
          title="بهترین های صوتی :"
          books={AUDIO_BOOKS.slice().reverse()}
          badge="محبوب‌ترین‌های کنج"
          viewAllLink="#best-audio"
        />

        {/* Book Synopses Section */}
        <BookSynopsis />

        {/* Voice Actors (صداهای ماندگار) */}
        <VoiceActors />

        {/* Promotional Banner 3: Nizar Qabbani */}
        <PromoBanner
          title="از عاشقانه‌های نزار قبانی بخوانیم…"
          subtitle="مجموعه‌ای بی‌نظیر از زیباترین اشعار، دست‌نوشته‌ها و داستان‌های عاشقانه معاصر"
          badge="همین الان با ۲۵٪ تخفیف تهیه نمایید"
          ctaText="مشاهده دفتر اشعار"
          ctaLink="#qabbani"
          image="/images/banner_nizar.png"
          imageAlt="مجموعه اشعار نزار قبانی"
          theme="dark"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


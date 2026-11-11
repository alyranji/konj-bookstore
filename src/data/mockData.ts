export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountPercent?: number;
  discountedPrice?: number;
  isAudio?: boolean;
  narrator?: string;
  duration?: string;
  category?: string;
  publisher?: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  slug: string;
  count?: number;
}

export interface Speaker {
  id: string;
  name: string;
  image: string;
  role: string;
  audioCount: number;
}

export interface AuthorQuote {
  id: string;
  quote: string;
  author: string;
  years: string;
  image: string;
}

export interface Synopsis {
  id: string;
  title: string;
  text: string;
  author: string;
  cover: string;
}

export const CATEGORIES: Category[] = [
  { id: '1', title: 'رمان خارجی', image: '/images/cat_novel.png', slug: 'foreign-novel', count: 480 },
  { id: '2', title: 'روانشناسی', image: '/images/cat_science.png', slug: 'psychology', count: 320 },
  { id: '3', title: 'کتاب تاریخی', image: '/images/cat_history.png', slug: 'history', count: 190 },
  { id: '4', title: 'کتاب متنی', image: '/images/cat_textbook.png', slug: 'textbooks', count: 1420 },
  { id: '5', title: 'کتاب صوتی', image: '/images/cat_audiobook.png', slug: 'audiobooks', count: 850 },
];

export const PLP_FILTER_CATEGORIES = [
  { id: 'all', title: 'همه‌ی دسته‌های موضوعی', count: 1420 },
  { id: 'novel', title: 'داستان و رمان', count: 540 },
  { id: 'psychology', title: 'روانشناسی', count: 320 },
  { id: 'management', title: 'مدیریت و بازاریابی', count: 180 },
  { id: 'social', title: 'علوم اجتماعی', count: 110 },
  { id: 'literature', title: 'ادبیات', count: 240 },
  { id: 'history', title: 'تاریخ', count: 190 },
  { id: 'art', title: 'هنر', count: 85 },
  { id: 'educational', title: 'آموزشی', count: 130 },
  { id: 'biography', title: 'زندگینامه و سفرنامه', count: 95 },
  { id: 'family', title: 'ازدواج و خانواده', count: 75 },
  { id: 'philosophy', title: 'فلسفه و عرفان', count: 140 },
];

export const PLP_PUBLISHERS = [
  { id: 'p1', name: 'انتشارات ۳۶۰ درجه', count: 84 },
  { id: 'p2', name: 'انتشارات جنگل', count: 192 },
  { id: 'p3', name: 'نشر چشمه', count: 310 },
  { id: 'p4', name: 'دنیای اقتصاد', count: 68 },
  { id: 'p5', name: 'انتشارات ایران', count: 95 },
  { id: 'p6', name: 'نشر نی', count: 145 },
  { id: 'p7', name: 'نشر ققنوس', count: 220 },
];

export const PLP_AUTHORS = [
  { id: 'a1', name: 'اروین د. یالوم', count: 18 },
  { id: 'a2', name: 'الیف شافاک', count: 12 },
  { id: 'a3', name: 'جورج اورول', count: 15 },
  { id: 'a4', name: 'جیمز کلیر', count: 6 },
  { id: 'a5', name: 'ویکتور فرانکل', count: 9 },
  { id: 'a6', name: 'خالد حسینی', count: 8 },
  { id: 'a7', name: 'محمود دولت آبادی', count: 24 },
  { id: 'a8', name: 'صادق هدایت', count: 14 },
];

export const NEW_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'وقتی نیچه گریست',
    author: 'اروین د. یالوم',
    cover: '/images/book_nietzsche.png',
    rating: 4.3,
    reviewCount: 98,
    price: 185000,
    discountPercent: 30,
    discountedPrice: 129500,
    isAudio: false,
    category: 'novel',
    publisher: 'نشر چشمه',
  },
  {
    id: 'b2',
    title: 'ملت عشق',
    author: 'الیف شافاک',
    cover: '/images/book_21.png',
    rating: 4.6,
    reviewCount: 142,
    price: 210000,
    discountPercent: 20,
    discountedPrice: 168000,
    isAudio: false,
    category: 'novel',
    publisher: 'نشر ققنوس',
  },
  {
    id: 'b3',
    title: 'تکه هایی از یک کل منسجم',
    author: 'پونه مقیمی',
    cover: '/images/book_20.png',
    rating: 4.8,
    reviewCount: 230,
    price: 165000,
    discountPercent: 15,
    discountedPrice: 140000,
    isAudio: false,
    category: 'psychology',
    publisher: 'انتشارات ۳۶۰ درجه',
  },
  {
    id: 'b4',
    title: 'هنر شفاف اندیشیدن',
    author: 'رولف دوبلی',
    cover: '/images/book_18.png',
    rating: 4.5,
    reviewCount: 88,
    price: 195000,
    discountPercent: 25,
    discountedPrice: 146250,
    isAudio: false,
    category: 'management',
    publisher: 'نشر چشمه',
  },
  {
    id: 'b5',
    title: 'عادت های اتمی',
    author: 'جیمز کلیر',
    cover: '/images/book_25.png',
    rating: 4.9,
    reviewCount: 310,
    price: 175000,
    discountPercent: 30,
    discountedPrice: 122500,
    isAudio: true,
    narrator: 'علی عسکری',
    category: 'psychology',
    publisher: 'نشر نی',
  },
  {
    id: 'b6',
    title: 'انسان در جستجوی معنی',
    author: 'ویکتور فرانکل',
    cover: '/images/book_17.png',
    rating: 4.7,
    reviewCount: 175,
    price: 130000,
    discountPercent: 10,
    discountedPrice: 117000,
    isAudio: false,
    category: 'philosophy',
    publisher: 'انتشارات ایران',
  },
];

export const DISCOUNTED_BOOKS: Book[] = [
  {
    id: 'd1',
    title: 'بادبادک باز',
    author: 'خالد حسینی',
    cover: '/images/book_27.png',
    rating: 4.7,
    reviewCount: 160,
    price: 240000,
    discountPercent: 30,
    discountedPrice: 168000,
    isAudio: false,
    category: 'novel',
    publisher: 'نشر نی',
  },
  {
    id: 'd2',
    title: '۱۹۸۴',
    author: 'جورج اورول',
    cover: '/images/book_201587.png',
    rating: 4.8,
    reviewCount: 280,
    price: 180000,
    discountPercent: 30,
    discountedPrice: 126000,
    isAudio: true,
    narrator: 'آرمان سلطانزاده',
    category: 'novel',
    publisher: 'نشر چشمه',
  },
  {
    id: 'd3',
    title: 'قلعه حیوانات',
    author: 'جورج اورول',
    cover: '/images/book_nietzsche1.png',
    rating: 4.6,
    reviewCount: 195,
    price: 120000,
    discountPercent: 25,
    discountedPrice: 90000,
    isAudio: false,
    category: 'novel',
    publisher: 'نشر چشمه',
  },
  {
    id: 'd4',
    title: 'شازده کوچولو',
    author: 'آنتوان دو سنت اگزوپری',
    cover: '/images/book_1d19.png',
    rating: 4.9,
    reviewCount: 520,
    price: 110000,
    discountPercent: 30,
    discountedPrice: 77000,
    isAudio: true,
    narrator: 'رضا عمرانی',
    category: 'novel',
    publisher: 'نشر نگاه',
  },
  {
    id: 'd5',
    title: 'کوری',
    author: 'ژوزه ساراماگو',
    cover: '/images/book_nietzsche2.png',
    rating: 4.5,
    reviewCount: 112,
    price: 215000,
    discountPercent: 20,
    discountedPrice: 172000,
    isAudio: false,
    category: 'novel',
    publisher: 'نشر ققنوس',
  },
  {
    id: 'd6',
    title: 'بوف کور',
    author: 'صادق هدایت',
    cover: '/images/book_img21.png',
    rating: 4.4,
    reviewCount: 94,
    price: 95000,
    discountPercent: 30,
    discountedPrice: 66500,
    isAudio: false,
    category: 'literature',
    publisher: 'نشر چشمه',
  },
];

export const AUDIO_BOOKS: Book[] = [
  {
    id: 'a1',
    title: 'کلیدر (جلد اول و دوم)',
    author: 'محمود دولت آبادی',
    cover: '/images/book_img22.png',
    rating: 4.9,
    reviewCount: 340,
    price: 320000,
    discountPercent: 30,
    discountedPrice: 224000,
    isAudio: true,
    narrator: 'آرمان سلطانزاده',
    duration: '۲۴ ساعت',
    category: 'novel',
    publisher: 'نشر چشمه',
  },
  {
    id: 'a2',
    title: 'مسئله اسپینوزا',
    author: 'اروین د. یالوم',
    cover: '/images/book_newnote.png',
    rating: 4.6,
    reviewCount: 89,
    price: 190000,
    discountPercent: 25,
    discountedPrice: 142500,
    isAudio: true,
    narrator: 'پیام دهکردی',
    duration: '۱۴ ساعت',
    category: 'philosophy',
    publisher: 'نشر نی',
  },
  {
    id: 'a3',
    title: 'مغازه خودکشی',
    author: 'ژان تولی',
    cover: '/images/book_24.png',
    rating: 4.7,
    reviewCount: 210,
    price: 140000,
    discountPercent: 20,
    discountedPrice: 112000,
    isAudio: true,
    narrator: 'هوتن شکیبا',
    duration: '۵ ساعت',
    category: 'novel',
    publisher: 'نشر چشمه',
  },
  {
    id: 'a4',
    title: 'چهار اثر از فلورانس',
    author: 'اسکاول شین',
    cover: '/images/book_23.png',
    rating: 4.5,
    reviewCount: 180,
    price: 160000,
    discountPercent: 30,
    discountedPrice: 112000,
    isAudio: true,
    narrator: 'رضا عمرانی',
    duration: '۹ ساعت',
    category: 'psychology',
    publisher: 'انتشارات جنگل',
  },
  {
    id: 'a5',
    title: 'بیمار خاموش',
    author: 'الکس مایکلیدیس',
    cover: '/images/book_22.png',
    rating: 4.8,
    reviewCount: 140,
    price: 185000,
    discountPercent: 15,
    discountedPrice: 157250,
    isAudio: true,
    narrator: 'رضا کیانیان',
    duration: '۱۱ ساعت',
    category: 'novel',
    publisher: 'دنیای اقتصاد',
  },
  {
    id: 'a6',
    title: 'چشم‌هایش',
    author: 'بزرگ علوی',
    cover: '/images/book_26.png',
    rating: 4.7,
    reviewCount: 165,
    price: 150000,
    discountPercent: 30,
    discountedPrice: 105000,
    isAudio: true,
    narrator: 'پیام دهکردی',
    duration: '۸ ساعت',
    category: 'novel',
    publisher: 'نشر نگاه',
  },
];

// PLP-specific Book Collections
export const PLP_BESTSELLERS: Book[] = [
  {
    id: 'plp-b1',
    title: 'مسئله ی اسپینوزا',
    author: 'اروین د. یالوم',
    cover: '/images/book_newnote.png',
    rating: 4.8,
    reviewCount: 98,
    price: 301000,
    discountPercent: 30,
    discountedPrice: 211000,
    isAudio: false,
    category: 'philosophy',
    publisher: 'نشر نی',
  },
  {
    id: 'plp-b2',
    title: 'درمان شوپنهاور',
    author: 'اروین د. یالوم',
    cover: '/images/book_nietzsche.png',
    rating: 4.7,
    reviewCount: 114,
    price: 217000,
    discountPercent: 10,
    discountedPrice: 195000,
    isAudio: false,
    category: 'psychology',
    publisher: 'نشر قطره',
  },
  {
    id: 'plp-b3',
    title: 'کتاب دلبستگی',
    author: 'امیر لوین',
    cover: '/images/book_20.png',
    rating: 4.5,
    reviewCount: 76,
    price: 180000,
    discountPercent: 20,
    discountedPrice: 144000,
    isAudio: false,
    category: 'psychology',
    publisher: 'نشر چشمه',
  },
  {
    id: 'plp-b4',
    title: 'هنر شفاف اندیشیدن',
    author: 'رولف دوبلی',
    cover: '/images/book_18.png',
    rating: 4.6,
    reviewCount: 142,
    price: 195000,
    discountPercent: 25,
    discountedPrice: 146250,
    isAudio: false,
    category: 'management',
    publisher: 'نشر چشمه',
  },
];

export const PLP_DISCOUNT_70: Book[] = [
  {
    id: 'p70-1',
    title: 'روانشناسی عزت نفس',
    author: 'ناتانیل براندن',
    cover: '/images/book_24.png',
    rating: 4.9,
    reviewCount: 220,
    price: 260000,
    discountPercent: 70,
    discountedPrice: 78000,
    isAudio: false,
    category: 'psychology',
    publisher: 'انتشارات ایران',
  },
  {
    id: 'p70-2',
    title: 'انسان در جستجوی معنی',
    author: 'ویکتور فرانکل',
    cover: '/images/book_17.png',
    rating: 4.8,
    reviewCount: 310,
    price: 190000,
    discountPercent: 70,
    discountedPrice: 57000,
    isAudio: false,
    category: 'philosophy',
    publisher: 'انتشارات جنگل',
  },
  {
    id: 'p70-3',
    title: 'وضعیت آخر',
    author: 'تامس هریس',
    cover: '/images/book_22.png',
    rating: 4.6,
    reviewCount: 88,
    price: 210000,
    discountPercent: 65,
    discountedPrice: 73500,
    isAudio: false,
    category: 'psychology',
    publisher: 'نشر نی',
  },
  {
    id: 'p70-4',
    title: 'بیگانه',
    author: 'آلبر کامو',
    cover: '/images/book_26.png',
    rating: 4.7,
    reviewCount: 190,
    price: 140000,
    discountPercent: 70,
    discountedPrice: 42000,
    isAudio: false,
    category: 'novel',
    publisher: 'نشر چشمه',
  },
];

export const SPEAKERS: Speaker[] = [
  {
    id: 's1',
    name: 'رضا عمرانی',
    image: '/images/speaker_omrani.png',
    role: 'گوینده و صداپیشه',
    audioCount: 48,
  },
  {
    id: 's2',
    name: 'رضا کیانیان',
    image: '/images/speaker_kianian.png',
    role: 'بازیگر و راوی',
    audioCount: 16,
  },
  {
    id: 's3',
    name: 'پیام دهکردی',
    image: '/images/speaker_dehkordi.png',
    role: 'کارگردان و راوی',
    audioCount: 32,
  },
  {
    id: 's4',
    name: 'آرمان سلطانزاده',
    image: '/images/speaker_soltanzadeh.png',
    role: 'صداپیشه و دوبلور',
    audioCount: 75,
  },
  {
    id: 's5',
    name: 'هوتن شکیبا',
    image: '/images/speaker_shakiba.png',
    role: 'بازیگر و صداپیشه',
    audioCount: 22,
  },
];

export const AUTHOR_QUOTES: AuthorQuote[] = [
  {
    id: 'q1',
    quote: 'گاهی باید به دور خود یک دیوار تنهایی کشید؛ نه برای این‌که دیگران را از خودت دور کنی، بلکه برای این‌که ببینی چه کسی برای دیدنت دیوار را خراب می‌کند.',
    author: 'ژان پل سارتر',
    years: '۱۹۸۰ – ۱۹۰۵',
    image: '/images/author_sartre.png',
  },
  {
    id: 'q2',
    quote: 'پول نمی‌تواند برایتان خوشبختی بخرد، اما مسلماً شکل خوشایندتری از مصیبت را برایتان می‌خرد.',
    author: 'اسپایک میلیگان',
    years: '۲۰۰۲ – ۱۹۱۸',
    image: '/images/author_milligan.png',
  },
  {
    id: 'q3',
    quote: 'مشکلِ این جهان این است که ابلهان پر از اطمینان‌اند و عاقلان پر از تردید.',
    author: 'برتراند راسل',
    years: '۱۹۷۰ – ۱۸۷۲',
    image: '/images/author_russell.png',
  },
  {
    id: 'q4',
    quote: 'مرگ، خاموش کردن چراغ نیست؛ تنها خاموش کردن چراغدان است، چون سپیده‌دم فرا رسیده است.',
    author: 'رابیندرانات تاگور',
    years: '۱۹۴۱ – ۱۸۶۱',
    image: '/images/author_tagore.png',
  },
];

export const SYNOPSES: Synopsis[] = [
  {
    id: 'syn1',
    title: 'ملت عشق',
    author: 'الیف شافاک',
    cover: '/images/synopsis_mellat.png',
    text: 'ملت عشق حکایتی شاعرانه از عشق و معنویت است، جایی که دل در جستجوی حقیقت، میان مسیرهای پیچیده زندگی به باریکی عبور می‌کند، و روح در آغوش معنای هستی آرام می‌گیرد.',
  },
  {
    id: 'syn2',
    title: 'مسئله اسپینوزا',
    author: 'اروین د. یالوم',
    cover: '/images/book_newnote.png',
    text: 'روایتی خیال‌انگیز و ژرف‌نگر از تلاقی دو ذهن متضاد است؛ جایی‌که فیلسوفی تبعیدشده با اندیشه‌هایی رهایی‌بخش، در برابر روان‌پریشی گرفتار در تاریکی ایدئولوژی قرار می‌گیرد، و داستانی فلسفی‌روانی می‌سازد از جدال نور و سایه در بستر تاریخ.',
  },
  {
    id: 'syn3',
    title: 'عادت های اتمی',
    author: 'جیمز کلیر',
    cover: '/images/book_25.png',
    text: 'چونان نقشه‌ای دقیق و الهام‌بخش است برای ساختن دگرگونی‌های بزرگ از دل تغییراتی کوچک، که با نگاهی موشکافانه و زبانی روشن، نشان می‌دهد چگونه قطره‌قطره رفتارهای خرد می‌توانند سیلی از موفقیت و رشد را در زندگی جاری سازند.',
  },
];

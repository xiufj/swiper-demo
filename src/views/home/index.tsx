import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import Card from './components/Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CARDS = [
  {
    image: '/src/assets/22de535d-9edd-45a1-97f5-51c4a48ed576.webp',
    amount: 'S$6,252',
    currency: 'Main',
    icon: '🛍️',
    title: 'Trainers cashback',
    subtitle: 'Well deserved',
    rightText: '+S$23.90',
  },
  {
    image: '/src/assets/27f2d874-8592-4dbe-85ec-14389754bfbc.webp',
    amount: '$2,500',
    currency: 'United States · USD',
    icon: '🍕',
    title: 'New York Pizza',
    subtitle: '11:30',
    rightText: '-$20',
  },
  {
    image: '/src/assets/43091c24-6fec-4549-a716-53903e09b93f.webp',
    amount: 'S$500',
    currency: 'Kiddo account',
    title: 'S$20 Request',
    subtitle: '',
  },
  {
    image: '/src/assets/43091c24-6fec-4549-a716-53903e09b93f.webp',
    amount: 'S$500',
    currency: 'Kiddo account',
    title: 'S$20 Request',
    subtitle: '',
  },
];

const HomePage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      {/* 标题部分 */}
      <div className='text-center mb-12 animate-fade-in'>
        <h1 className='text-5xl font-bold mb-6 md:text-6xl lg:text-7xl'>
          MAKE YOUR SPEND, WELL-SPENT
        </h1>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-8 md:text-xl'>
          Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big
          life goals? Reach them faster. However you spend — Revolut is all you
          need.
        </p>
        <button className='bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors transform hover:scale-105'>
          Get started
        </button>
      </div>

      {/* 轮播部分 */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className='mySwiper'
        breakpoints={{
          // 移动端
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // 平板
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // 桌面端
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {CARDS.map((card, index) => (
          <SwiperSlide key={index} className='swiper-slide-custom'>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;

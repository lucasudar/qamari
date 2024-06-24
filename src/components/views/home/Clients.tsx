"use client";

import NextImage from 'next/image';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

const CLIENTS_LOGOS = [
    'alberta_innovates.svg',
    'alberta0.svg',
    'alberta1.svg',
    'building_trades_of_alberta.svg',
    'the_city_of_calgary.svg',
    'university_of_alberta.svg',
];

export default function ClientsSection() {
    function normalizePartnerLogoName(logo: string) {
        return logo.replace('.svg', '');
    }

    return (
        <section className="bg-white dark:bg-background py-8">
            <div className="max-w-5xl mx-auto px-4">
                <h3 className="text-center text-lg uppercase tracking-widest mb-8 opacity-80">Our Clients</h3>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                    }}
                    speed={3000}
                    breakpoints={{
                        320: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        1025: { slidesPerView: 6 },
                    }}
                    className="mt-2 select-none"
                >
                    {CLIENTS_LOGOS.map((logo, index) => (
                        <SwiperSlide key={index} className="flex justify-center opacity-80 transition-opacity duration-200 hover:opacity-100">
                            <NextImage src={'/clients/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={128} />
                        </SwiperSlide>
                    ))}
                    {CLIENTS_LOGOS.map((logo, index) => (
                        <SwiperSlide key={index + CLIENTS_LOGOS.length} className="flex justify-center opacity-80 transition-opacity duration-200 hover:opacity-100">
                            <NextImage src={'/clients/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={128} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

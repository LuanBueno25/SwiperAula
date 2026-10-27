"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideImages } from "../data/slideData";

export default function Carousel() {
    const articles = [
        {
            id: 1,
            image: slideImages[0],
            category: "Aventura",
            title: "Sea of Thieves: explore os mares e viva grandes aventuras",
            date: "Sea of Thieves",
            views: "--",
            url: "https://www.seaofthieves.com/",
        },
        {
            id: 2,
            image: slideImages[1],
            category: "Cartas",
            title: "Yu-Gi-Oh! Duel Links: monte seu deck e enfrente duelistas",
            date: "Yu-Gi-Oh! Duel Links",
            views: "--",
            url: "https://www.konami.com/yugioh/duel_links/",
        },
        {
            id: 3,
            image: slideImages[2],
            category: "FPS",
            title: "Counter-Strike 2: estratégia, precisão e trabalho em equipe",
            date: "Counter-Strike 2",
            views: "--",
            url: "https://www.counter-strike.net/cs2",
        },
        {
            id: 4,
            image: slideImages[3],
            category: "MOBA",
            title: "League of Legends: escolha seu campeão e vença a partida",
            date: "League of Legends",
            views: "--",
            url: "https://www.leagueoflegends.com/pt-br/",
        },
        {
            id: 5,
            image: slideImages[4],
            category: "MMORPG",
            title: "World of Warcraft Forever: explore Azeroth e complete missões",
            date: "World of Warcraft Classic",
            views: "--",
            url: "https://worldofwarcraft.blizzard.com/pt-br/",
        },
    ];

    return (
        <section className="w-full bg-[#f8f9fa] px-5 py-12 sm:px-8 md:py-16">
            <div className="mx-auto max-w-5xl">
                <header className="mb-9 text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-[#222222]">
                        Blog
                    </h2>

                    <p className="mt-3 text-sm text-[#777777] sm:text-base">
                        De aventuras épicas a batalhas competitivas, encontre seu próximo jogo favorito.
                    </p>

                    <div className="mx-auto mt-7 h-px w-44 bg-[#e5e7eb]" />
                </header>

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 26,
                        },
                    }}
                    className="blog-carousel !pb-12"
                >
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <article onClick={() => window.open(article.url, "_blank", "noopener,noreferrer")}
                                className="mx-auto h-full w-full max-w-[300px] cursor-pointer overflow-hidden rounded-md bg-transparent">
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={article.image.src}
                                        alt={article.image.alt}
                                        width={1000}
                                        height={600}
                                        className="block aspect-[5/3] w-full rounded-md object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                <div className="pt-3">
                                    <span className="text-xs font-medium text-[#3478d4]">
                                        {article.category}
                                    </span>

                                    <h3 className="mt-1 text-sm font-semibold leading-snug text-[#202124]">
                                        {article.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-[#777777]">
                                        <span className="inline-flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            >
                                                <rect
                                                    x="3"
                                                    y="5"
                                                    width="18"
                                                    height="16"
                                                    rx="2"
                                                />
                                                <path d="M16 3v4M8 3v4M3 11h18" />
                                            </svg>
                                            {article.date}
                                        </span>

                                        <span>•</span>

                                        <span className="inline-flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            >
                                                <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            {article.views}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .blog-carousel .swiper-button-next,
                .blog-carousel .swiper-button-prev {
                    color: #3478d4;
                    width: 30px;
                    height: 30px;
                }

                .blog-carousel .swiper-button-next::after,
                .blog-carousel .swiper-button-prev::after {
                    font-size: 17px;
                    font-weight: 600;
                }

                .blog-carousel .swiper-pagination {
                    bottom: 0 !important;
                }

                .blog-carousel .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    background: #c7cbd1;
                    opacity: 1;
                }

                .blog-carousel .swiper-pagination-bullet-active {
                    background: #3478d4;
                }
            `}</style>
        </section>
    );
}
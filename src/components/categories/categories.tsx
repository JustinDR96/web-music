/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import useAccessToken from "@/utils/useAccessToken";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Categories() {
  const { accessToken } = useAccessToken();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/categories",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        setCategories(response.data.categories.items);
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête à l'API Spotify", error);
      }
    };

    fetchCategories();
  }, [accessToken]);

  return (
    <div className="categories">
      {categories && (
        <Swiper
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            480: {
              slidesPerView: 2.5,
            },
            640: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 5.5,
            },
            1440: {
              slidesPerView: 6.5,
            },
          }}
        >
          {(categories as Array<any>).map((category) => (
            <SwiperSlide key={category.id}>
              <div className="categorie-item">
                <a href={category.href}>{category.name}</a>
                <img src={category.icons[0].url} alt={category.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

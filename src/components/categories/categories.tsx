/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import useAccessToken from "@/utils/useAccessToken";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 4,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="categories">
      categorie component
      {categories && (
        <Slider {...settings}>
          {(categories as Array<any>).map((category) => (
            <div className="categorie-item" key={category.id}>
              <a href={category.href}>{category.name}</a>
              <img src={category.icons[0].url} alt={category.name} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

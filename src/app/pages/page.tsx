/* eslint-disable @next/next/no-img-element */
// pages/index.js
"use client";
import { useEffect, useState } from "react";
import useAccessToken from "../utils/useAccessToken";

type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    url: string;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export default function Artist() {
  const { accessToken } = useAccessToken();
  const [artist, setArtist] = useState<Artist | null>(null);
  const artistId = "0TnOYISbd1XYRBk9myaseg";

  useEffect(() => {
    const fetchArtist = async () => {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setArtist(data);
      } else {
        console.error(
          "Erreur lors de la requête à l'API Spotify",
          await response.text()
        );
      }
    };

    fetchArtist();
  }, [accessToken, artistId]); // Ajoutez artistId comme dépendance pour refaire la requête si l'ID de l'artiste change
  console.log(artist);

  return (
    <div>
      {artist && (
        <>
          <h1>{artist.name}</h1>
          {artist.images && artist.images[0] && (
            <img src={artist.images[0].url} alt={artist.name} />
          )}
          <p>Popularité : {artist.popularity}%</p>
          <p>Followers : {artist.followers.total}</p>
          <ul>
            {artist.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

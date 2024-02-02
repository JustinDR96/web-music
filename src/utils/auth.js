// utils/auth.js
import axios from "axios";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "./config";

export async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
}

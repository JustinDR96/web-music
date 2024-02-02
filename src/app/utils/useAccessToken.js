// utils/useAccessToken.js
import { useState, useEffect } from "react";
import { getAccessToken } from "./auth";

export default function useAccessToken() {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await getAccessToken();
        setAccessToken(token);
        localStorage.setItem("AccessToken", token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAccessToken();
  }, []);

  return { accessToken, loading };
}

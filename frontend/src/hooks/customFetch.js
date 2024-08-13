import { useState, useEffect } from "react";
const cache = {};

const customFetch = (url, cacheDuration = 60000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Check if data is in cache and not expired
      const cachedData = cache[url];
      const now = new Date().getTime();

      if (cachedData && now - cachedData.timestamp < cacheDuration) {
        setData(cachedData.data);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        cache[url] = { data: json, timestamp: now }; // Store response with timestamp
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, cacheDuration]);

  return { loading, error, data };
};

export default customFetch;

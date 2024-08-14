import { useState, useEffect } from "react";

const customFetch = (url, cacheDuration = 600000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Check if data is in localStorage and not expired
      const cachedItem = localStorage.getItem(url);
      const now = new Date().getTime();

      if (cachedItem) {
        const cachedData = JSON.parse(cachedItem);
        if (now - cachedData.timestamp < cacheDuration) {
          setData(cachedData.data);
          // console.log("getting from localStorage");
          setLoading(false);
          return;
        } else {
          localStorage.removeItem(url); // Clear expired cache
        }
      }

      try {
        // console.log("fetching...");
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        localStorage.setItem(
          url,
          JSON.stringify({ data: json, timestamp: now })
        ); // Store response with timestamp
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

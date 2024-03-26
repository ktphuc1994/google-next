'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country)
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setIsLoading(false);
        });
      if (!response) return;
      setCountry(response);
    };

    getCountry();
  }, []);

  return <p>{isLoading ? 'Loading...' : country}</p>;
}

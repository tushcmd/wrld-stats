import React, { FC, useEffect, useState } from 'react';

interface CountryData {
  // Define the properties of the country data object
  name: {
    common: string;
    // Add other properties as needed
  };
  // Add more properties as needed
}

const getCountry = async (id: string): Promise<CountryData[]> => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const country: CountryData[] = await res.json();
  return country;
};

const Country: FC = () => {
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      const id = 'USA'; // Replace with the desired country code
      const data = await getCountry(id);
      setCountryData(data[0]); // Assuming the API returns an array with a single country object
    };

    fetchCountryData();
  }, []);

  return <div>page: {countryData?.name.common}</div>;
};

export default Country;
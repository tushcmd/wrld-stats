'use client'

import { useState, useEffect } from "react";
import CountriesTable from "../CountriesTable/CountriesTable";
import SearchInput from "../SearchInput/SearchInput";

import { Country } from '@/types/item-types'

interface HomeProps {
  countries: Country[];
}

export default function Main({ countries }: HomeProps) {
  const [data, setCountries] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(countries)
        setLoading(false)
      })
  }, [])
  

  return (
    <>
      {/* No of countries + InputContainer */}
      <div className="flex justify-between items-center">
        {/* No of countries */}
        <div>{countries.length} countries</div>
        <SearchInput onChange={onInputChange} />
      </div>
      <CountriesTable countries={filteredCountries} />
    </>
  );
}

export async function getStaticProps(): Promise<{ props: MainProps }> {
  try {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries: Country[] = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to fetch countries: ${res.status}`);
    }

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.error('Error fetching countries:', error);
    return {
      props: {
        countries: [],
        error: 'Failed to fetch countries',
      },
    };
  }
}
'use client';

import { useState, useEffect } from 'react';
import CountriesTable from '@/components/CountriesTable/CountriesTable';
import SearchInput from '@/components/SearchInput/SearchInput';
import { Country } from '@/types/item-types';

export default function Main() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const data: Country[] = await res.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries?.length ? countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  ) : [];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

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
//export async function getStaticProps(): Promise<{ props: HomeProps }> {
//  const res = await fetch('https://restcountries.com/v3.1/all');
//  const countries: Country[] = await res.json();
//
//  return {
//    props: {
//      countries,
//    },
//  };
//}
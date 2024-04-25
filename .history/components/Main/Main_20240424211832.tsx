{/*
'use client';

import { useState } from 'react';
import CountriesTable from '@/components/CountriesTable/CountriesTable';
import SearchInput from '@/components/SearchInput/SearchInput';
import { Country } from '@/types/item-types';

interface MainProps {
  searchParams: URLSearchParams;
}

export default function Main({ searchParams }: MainProps) {
  const countries: Country[] = searchParams.get('countries')
    ? JSON.parse(searchParams.get('countries') || '[]')
    : [];

  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries?.length
    ? countries.filter(
        (country: Country) =>
          country.name.toLowerCase().includes(keyword) ||
          country.region.toLowerCase().includes(keyword) ||
          country.subregion.toLowerCase().includes(keyword)
      )
    : [];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      {/* No of countries + InputContainer */}
//      <div className="flex justify-between items-center">
//        {/* No of countries */}
//        <div>{countries.length} countries</div>
//        <SearchInput onChange={onInputChange} />
//      </div>
//      <CountriesTable countries={filteredCountries} />
//    </>
//  );
//}


'use client';

import { useState } from 'react';
import CountriesTable from '@/components/CountriesTable/CountriesTable';
import SearchInput from '@/components/SearchInput/SearchInput';
import { Country } from '@/types/item-types';

interface MainProps {
  countries: Country[];
}

export default function Main() {
  
  const [countries, setCountries] = useState<Country[]>([]);
  const [keyword, setKeyword] = useState('');

  
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

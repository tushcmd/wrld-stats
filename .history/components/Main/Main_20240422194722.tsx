'use client'

import { useState, useEffect } from "react";
import CountriesTable from "../CountriesTable/CountriesTable";
import SearchInput from "../SearchInput/SearchInput";

import { Country } from '@/types/item-types'

interface HomeProps {
  countries: Country[];
}

export default function Main({ countries }: HomeProps) {
  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries.filter(
    (country) => {
      // Check if name, region, and subregion are strings before conversion
      const name = typeof country.name === 'string' ? country.name.toLowerCase() : '';
      const region = typeof country.region === 'string' ? country.region.toLowerCase() : '';
      const subregion = typeof country.subregion === 'string' ? country.subregion.toLowerCase() : '';
  
      return name.includes(keyword) || region.includes(keyword) || subregion.includes(keyword);
    }
  );

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
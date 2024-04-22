'use client'

import { useState } from "react";
import CountriesTable from "../CountriesTable/CountriesTable";
import SearchInput from "../SearchInput/SearchInput";

import { Country } from '@/types/item-types'

interface HomeProps {
  countries: Country[];
}

export default function Main({ countries }: HomeProps) {
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
//  const res = await fetch('https://restcountries.eu/rest/v2/all');
//  const countries: Country[] = await res.json();
//
//  return {
//    props: {
//      countries,
//    },
//  };
//}
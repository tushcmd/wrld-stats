import React, { FC, useState } from 'react'
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react'
import Link from 'next/link'

interface Country {
  name: string;
  population: number;
  area: number;
  gini: number;
  flag: string;
  alpha3Code: string;
}

const orderBy = (countries: Country[], value: keyof Country, direction: 'asc' | 'desc' | null) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }
  return countries;
};

interface SortArrowProps {
  direction: 'asc' | 'desc' | null;
}

const SortArrow: FC<SortArrowProps> = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <div className='flex justify-center items-center ml-[2px]'>
        <ChevronDownCircle color="inherit" />
      </div>
    );
  } else {
    return (
      <div className='flex justify-center items-center ml-[2px]'>
        <ChevronUpCircle color="inherit" />
      </div>
    );
  }
};

interface CountriesTableProps {
  countries: Country[];
}

const CountriesTable: FC<CountriesTableProps> = ({ countries }) => {
  const [direction, setDirection] = useState<'asc' | 'desc' | null>(null);
  const [value, setValue] = useState<keyof Country | null>(null);

  const orderedCountries = orderBy(countries, value || 'name', direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value: keyof Country) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className='flex p-5'>
        <div className='flex-1 mr-4'>
        </div>
        <button
          className='flex-[4] text-muted-foreground font-medium flex justify-center items-center'
          onClick={() => setValueAndDirection('name')}
        >
          <div>Name</div>
          {value === 'name' && <SortArrow direction={direction} />}
        </button>
      </div>
    </div>
  )
}

export default CountriesTable;
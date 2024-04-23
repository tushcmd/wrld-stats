// app/getData.tsx
import { Country } from '@/types/item-types';

export const getData = async (): Promise<Country[]> => {
  const res = await fetch('https://restcountries.eu/rest/v3.1/all', { cache: 'no-store' });
  const countries: Country[] = await res.json();
  return countries;
};

export default getData;
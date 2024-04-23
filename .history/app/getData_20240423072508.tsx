
import { Country } from '@/types/item-types';

export const getData = async (): Promise<Country[]> => {
  const res = await fetch('https://restcountries.eu/rest/v2/all', { cache: 'no-store' });
  const countries: Country[] = await res.json();
  return countries;
};

export default getData;
import { fetcher } from '@/lib/utils'; // Assuming you have the fetcher function in a separate file
import { Country } from '@/types/item-types';

export const getData = async (): Promise<Country[]> => {
  try {
    const countries: Country[] = await fetcher('https://restcountries.eu/rest/v2/all');
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error; // You can also handle the error differently, e.g., return an empty array or a fallback value
  }
};

export default getData;


{/*
import { Country } from '@/types/item-types';

export const getData = async (): Promise<Country[]> => {
  const res = await fetch('https://restcountries.eu/rest/v2/all', { cache: 'no-store' });
  const countries: Country[] = await res.json();
  return countries;
};

export default getData;
*/}
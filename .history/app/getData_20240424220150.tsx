// app/getData.tsx
import { Country } from '@/types/item-types';

export const getData = async (): Promise<Country[]> => {
  const res = await fetch('http://localhost:3000/api/countries', {
    cache: 'no-store',
  });
  const countries: Country[] = await res.json();
  return countries;
};

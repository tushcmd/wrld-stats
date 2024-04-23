import useSWR, { Fetcher } from 'swr';
import { Country } from '@/types/item-types';

const fetcher: Fetcher<Country[], string> = (url) =>
  fetch(url).then((res) => res.json());

const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const useFetchCountries = () => {
  const { data, error } = useSWR<Country[]>(
    `${corsProxyUrl}https://restcountries.eu/rest/v3.1/all`,
    fetcher
  );

  return {
    countries: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
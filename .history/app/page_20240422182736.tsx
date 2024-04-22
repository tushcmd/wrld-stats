//import Hero from '@/components/Hero';

import Main from "@/components/Main/Main";
import { fetcher } from '@/lib/utils';
import { Country } from '@/types/item-types';

export default async function Home() {

  const countries: Country[] = await fetcher('https://restcountries.eu/rest/v2/all');

  return (
    <main className="page-container">
      {/*<Hero />*/}
      <Main countries={countries} />
    </main>
  );
}
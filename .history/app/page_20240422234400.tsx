//import Hero from '@/components/Hero';

import Main from "@/components/Main/Main";
import { Country } from "@/types/item-types";

interface HomeProps {
  countries: Country[];
}



export default async function Home({countries}: HomeProps) {
  //const countries: Country[] = await fetcher('https://restcountries.eu/rest/v2/all');

  return (
    <main className="page-container">
      {/*<Hero />*/}
      <Main />
    </main>
  );
}
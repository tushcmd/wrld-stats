//import Hero from '@/components/Hero';

import Main from "@/components/Main/Main";


export default async function Home() {

  //const countries: Country[] = await fetcher('https://restcountries.eu/rest/v2/all');

  return (
    <main className="page-container">
      {/*<Hero />*/}
      <Main countries={[]} />
    </main>
  );
}
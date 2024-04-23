//import Hero from '@/components/Hero';

import Main from "@/components/Main/Main";


async function getData() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {


  //const countries: Country[] = await fetcher('https://restcountries.eu/rest/v2/all');

  return (
    <main className="page-container">
      {/*<Hero />*/}
      <Main countries={countries} />
    </main>
  );
}
//import Hero from '@/components/Hero';

import Main from "@/components/Main/Main";
import { Country } from "@/types/item-types";

interface HomeProps {
  countries: Country[];
}


//export async function getServerSideProps(): Promise<{ props: HomeProps }> {
//  try {
//    const res = await fetch('https://restcountries.com/v3.1/all'); // Updated URL
//
//    if (!res.ok) {
//      throw new Error(`Failed to fetch countries: ${res.status}`);
//    }
//
//    const countries: Country[] = await res.json();
//
//    return {
//      props: {
//        countries,
//      },
//    };
//  } catch (error) {
//    console.error('Error fetching countries:', error);
//    // Handle errors gracefully, e.g., display an error message to the user
//    return {
//      props: {
//        countries: [], // Provide an empty array to prevent rendering issues
//      },
//    };
//  }
//}

async function getData() {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home({countries}: HomeProps) {
  const data = await getData()
  //const countries: Country[] = await fetcher('https://restcountries.eu/rest/v2/all');

  return (
    <main className="page-container">
      {/*<Hero />*/}
      <Main countries={countries} />
    </main>
  );
}
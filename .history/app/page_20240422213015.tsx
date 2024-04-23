//import Hero from '@/components/Hero';

import Main from "@/components/Main/Main";
import { Country } from "@/types/item-types";

interface HomeProps {
  countries: Country[];
}


export async function getServerSideProps(): Promise<{ props: MainProps }> {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all'); // Updated URL

    if (!res.ok) {
      throw new Error(`Failed to fetch countries: ${res.status}`);
    }

    const countries: Country[] = await res.json();

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Handle errors gracefully, e.g., display an error message to the user
    return {
      props: {
        countries: [], // Provide an empty array to prevent rendering issues
      },
    };
  }
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
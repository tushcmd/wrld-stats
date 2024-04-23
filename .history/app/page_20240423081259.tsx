import Main from '@/components/Main/Main';
import getData from './getData';
import { Country } from '@/types/item-types';
import { fetcher } from '@/lib/utils';

export default async function Home() {
  //const countries = await getData();
  const countries = await fetcher('https://restcountries.eu/rest/v2/all')

  return (
    <main className="page-container">
      <ServerMain countries={countries} />
    </main>
  );
}

const ServerMain = ({ countries }: { countries: Country[] }) => {
  
  return <Main />;
};

export { ServerMain };
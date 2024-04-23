import Main from '@/components/Main/Main';
import getData from './getData';
import { Country } from '@/types/item-types';

export default async function Home() {
  const countries = await getData();

  return (
    <main className="page-container">
      <ServerMain countries={countries} />
    </main>
  );
}

const ServerMain = ({ countries }: { countries: Country[] }) => {
  return <Main countries={countries} />;
};
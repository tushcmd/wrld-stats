import Main from '@/components/Main/Main';
import { useFetchCountries } from './fetchCountries';
import { Country } from '@/types/item-types';

export default function Page() {
  const { countries, isLoading, isError } = useFetchCountries();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <main className="page-container">
      <ServerMain countries={countries} />
    </main>
  );
}

const ServerMain = ({ countries }: { countries: Country[] }) => {
  return <Main countries={countries} />;
};

export { ServerMain };
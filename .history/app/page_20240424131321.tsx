import Main from '@/components/Main/Main';
import { getData } from './getData';
import { Country } from '@/types/item-types';

export default async function Page() {
  const countries = await getData();
  return (
    <main className="page-container">
      <ServerMain countries={countries} />
    </main>
  );
}

const ServerMain = async ({ countries }: { countries: Country[] }) => {
  const searchParams = new URLSearchParams();
  searchParams.set('countries', JSON.stringify(countries));
  return <Main searchParams={searchParams} />;
};

export { ServerMain };


{/*
import Main from '@/components/Main/Main';
import { getData } from './getData';
import { Country } from '@/types/item-types';

export default async function Page() {
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

export { ServerMain };

*`/}
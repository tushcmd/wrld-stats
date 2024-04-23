'use client';

import Main from '@/components/Main/Main';
import { Country } from '@/types/item-types';

interface ClientMainProps {
  countries: Country[];
}

const ClientMain = ({ countries }: ClientMainProps) => {
  return <Main countries={countries} />;
};

export default ClientMain;
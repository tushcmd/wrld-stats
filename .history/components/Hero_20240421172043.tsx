import { Search } from 'lucide-react';
import React, { FC } from 'react';
import { TableDemo } from './list';
import { Input } from './ui/input';

const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div className='container flex flex-col md:flex-row justify-between items-center'>
        <p className='text-base lg:text-3xl tracking-tighter font-bold bg-gradient-to-br from-foreground via-secondary-foreground/90 to-muted-foreground bg-clip-text text-transparent drop-shadow-sm'>Invoices</p>
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter by Country or Continent..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
          </div>
        </form>
      </div>

      <TableDemo />
    </section>
  );
};


export default Hero;

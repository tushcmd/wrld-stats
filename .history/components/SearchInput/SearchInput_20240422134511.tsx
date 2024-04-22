import { Search } from 'lucide-react';
import React, { FC, ChangeEvent } from 'react';
import { Input } from '../ui/input';

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  return (
    <form className="ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Filter by Country or Continent..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default SearchInput;
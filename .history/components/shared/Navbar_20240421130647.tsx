import React, { FC } from 'react';
import ThemeSwitcherButton from '../ui/ThemeSwitcher';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <nav className="border-b py-5">
      <div className="mx-auto px-5 flex justify-between items-center ">
        <Logo />
        <ThemeSwitcherButton />
      </div>
    </nav>
  );
};

export default Navbar;

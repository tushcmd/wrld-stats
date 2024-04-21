import React, { FC } from 'react';
import ThemeSwitcherButton from '../ui/ThemeSwitcher';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <nav className="border-b py-5">
      <div className=" flex justify-between items-center">
        <Logo />
        <ThemeSwitcherButton />
      </div>
    </nav>
  );
};

export default Navbar;

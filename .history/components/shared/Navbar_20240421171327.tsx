import React, { FC } from 'react';
import ThemeSwitcherButton from '../ui/ThemeSwitcher';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <nav className="border-b py-5">
      <div className="layout-container flex justify-between items-center max-w-7xl">
        <Logo />
        <ThemeSwitcherButton />
      </div>
    </nav>
  );
};

export default Navbar;

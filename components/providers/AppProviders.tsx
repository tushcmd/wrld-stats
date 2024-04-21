'use client';

import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}


const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="dark" enableSystem>
        {children}
        
      </ThemeProvider>
    </>
  );
};

export default AppProviders;

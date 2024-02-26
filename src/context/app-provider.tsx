import { PropsWithChildren } from 'react';
import { ThemeProvider } from '.';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

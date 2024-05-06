import { useState } from 'react';

export const useViewPassword = () => {
  const [view, setView] = useState(false);
  const viewPassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setView(!view);
  };
  return { viewPassword, view };
};

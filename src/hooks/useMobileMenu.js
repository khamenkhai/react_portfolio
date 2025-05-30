import { useState } from 'react';

const useMobileMenu = () => {
  console.log("Hello world");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isMenuOpen, toggleMenu };
};

export default useMobileMenu;
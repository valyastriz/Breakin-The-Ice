import { createContext, useContext, useState } from 'react';

const CollapseContext = createContext();

export const CollapseProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  return (
    <CollapseContext.Provider value={{ navOpen, toggleNav }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = () => useContext(CollapseContext);
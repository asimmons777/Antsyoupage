import React from 'react';

interface NavBarProps {
  items?: string[];
  onSelect?: (item: string) => void;
}

const defaultItems = ['ABOUT ME','PROJECTS','RESUME','EXPERIENCE','CHRIST'];

const NavBar: React.FC<NavBarProps> = ({ items = defaultItems, onSelect }) => {
  return (
    <nav id="hub" aria-label="Main navigation">
      {items.map(label => (
        <button key={label} onClick={() => onSelect?.(label)}>{label}</button>
      ))}
    </nav>
  );
};

export default NavBar;

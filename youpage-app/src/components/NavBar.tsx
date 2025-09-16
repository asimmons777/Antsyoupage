import React from 'react'; // Import React so JSX syntax compiles
import { Link } from 'react-router-dom';


// Props accepted by the NavBar component.
//  - items: optional custom list of button labels. Defaults provided below.
//  - onSelect: optional callback invoked with the label of the clicked button.
interface NavBarProps {
  items?: string[]; // Custom list of labels (optional)
  onSelect?: (item: string) => void; // Click handler (optional)
}

// Default navigation labels shown if parent does not supply its own list.
const defaultItems = ['ABOUT ME','PROJECTS','RESUME','EXPERIENCE','CHRIST','CODEHAVEN'];

const NavBar: React.FC<NavBarProps> = ({ items = defaultItems, onSelect }) => { // Destructure props with default
  return (
    <nav id="hub" aria-label="Main navigation"> {/* Semantic navigation container */}
      {items.map(label =>{
        if (label === 'ABOUT ME') {
        return (
          <Link key= {label} to="/about">
            {label}
          </Link>
        );
      }
      
      if (label === 'PROJECTS') {
        return (
          <Link key={label} to='/projects'>
            {label}
          </Link>
        );
      }

      if (label === 'EXPERIENCE') {
        return (
          <Link key={label} to='/experience'>
            {label}
            </Link>
        );
      }

      if (label === 'RESUME') {
        return (
          <Link key={label} to='/resume'>
            {label}
          </Link>
        );
      }

      if (label === 'CHRIST') {
        return (
          <Link key= {label} to="/christ">
            {label}
          </Link>
        )
      }
      
      return (
        <button
          key={label} // Stable key helps React reconcile list efficiently
          type="button" // Ensure it never behaves like a form submit button
          onClick={() => onSelect?.(label)} // Optional chaining: only call if provided
        >
          {label} {/* Visible button text */}
        </button>
      );
    })}
    </nav>
  );
};

export default NavBar;

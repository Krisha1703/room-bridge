import  { useState, memo } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from 'motion/react';
import { Menu } from '@mui/icons-material';
import NavbarMenus from './navbar-menus';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="flex lg:flex-row flex-col justify-between z-30 items-center h-16 w-full sticky bg-white top-0 shadow-sm"
      role="navigation"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-secondary font-semibold text-2xl p-4">
          Room<span className="text-primary">Bridge</span>
        </h1>
        <Menu
          onClick={toggleMenu}
          className="md:hidden text-primary cursor-pointer"
        />
      </div>

      <ul
        className={`${
          isMenuOpen ? 'grid grid-cols-3 bg-white w-full z-20' : 'hidden'
        } md:flex md:flex-row mx-10 text-lg font-semibold text-primary transition-all duration-500 ease-in-out`}
      >
        <NavbarMenus href="/" Menu="Home" />
        <NavbarMenus href="/about" Menu="About Us" />
        <NavbarMenus href="/explore" Menu="Explore" />
        <NavbarMenus href="/offers" Menu="Offers" />
        <NavbarMenus href="/contact" Menu="Contact Us" />

        <motion.li
          initial={{ color: '#1E3A8A' }}
          whileHover={{ color: '#FFC107' }}
          transition={{ duration: 0.5 }}
          className="p-4 cursor-pointer"
        >
          <AccountCircleIcon className="text-4xl" /> Sign In
        </motion.li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);

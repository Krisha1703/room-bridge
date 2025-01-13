import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
  // State to handle the menu visibility on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility when the menu icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex lg:flex-row flex-col justify-between z-30 items-center h-16 w-full sticky bg-white top-0 shadow-sm" role="navigation">
      
      <div className='flex justify-between items-center'>
        <h1 className="text-secondary font-semibold text-2xl p-4">
          Room
        <span className='text-primary'>Bridge</span>
        </h1>

        {/* Menu icon visible on small screens */}
        <Menu onClick={toggleMenu} className="md:hidden text-primary cursor-pointer" />
      </div>

      {/* Menu items */}
      <ul
        className={`${
          isMenuOpen ? 'grid grid-cols-2 bg-primary w-full z-100' : 'hidden'
        } md:flex md:flex-row mx-10 text-lg font-semibold text-primary transition-all duration-500 ease-in-out`}>
        <Link href='/'>
          <motion.li
            initial={{ color: "#1E3A8A" }}
            whileHover={{ color: "#FFC107" }}
            transition={{ duration: 0.5 }}
            className="p-4 cursor-pointer">
            Home
          </motion.li>
        </Link>

        <Link href='/about'>
          <motion.li
            initial={{ color: "#1E3A8A" }}
            whileHover={{ color: "#FFC107" }}
            transition={{ duration: 0.5 }}
            className="p-4 cursor-pointer">
            About Us
          </motion.li>
        </Link>

        <Link href='/explore'>
          <motion.li
            initial={{ color: "#1E3A8A" }}
            whileHover={{ color: "#FFC107" }}
            transition={{ duration: 0.5 }}
            className="p-4 cursor-pointer">
            Explore
          </motion.li>
        </Link>

        <Link href='/offers'>
          <motion.li
            initial={{ color: "#1E3A8A" }}
            whileHover={{ color: "#FFC107" }}
            transition={{ duration: 0.5 }}
            className="p-4 cursor-pointer">
            Offers
          </motion.li>
        </Link>

        <Link href='/contact'>
          <motion.li
            initial={{ color: "#1E3A8A" }}
            whileHover={{ color: "#FFC107" }}
            transition={{ duration: 0.5 }}
            className="p-4 cursor-pointer">
            Contact Us
          </motion.li>
        </Link>

        <motion.li
          initial={{ color: "#1E3A8A" }}
          whileHover={{ color: "#FFC107" }}
          transition={{ duration: 0.5 }}
          className="p-4 cursor-pointer">
          <AccountCircleIcon className='text-4xl' /> Sign In
        </motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;

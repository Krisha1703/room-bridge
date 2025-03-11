import { useState, memo } from 'react';
import { Menu } from '@mui/icons-material';
import { motion } from 'motion/react';
import NavbarMenus from './navbar-menus';
import Login from '../form-modal/login';
import SignUp from '../form-modal/signup';
import useUserStore from '@/app/state/store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import User from '../form-modal/user';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  // Get user state from the store
  const { firstname, lastname, email, role } = useUserStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const handleLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  // Logout handler
  const handleLogout = () => {
    useUserStore.getState().resetUser(); // Reset user details in the store
    setIsUserModalOpen(false);
  };

  // Generate initials
  const getInitials = (first, last) => {
    const firstInitial = first && typeof first === 'string' ? first[0].toUpperCase() : ''; // Ensure it's a string before calling toUpperCase
    const lastInitial = last && typeof last === 'string' ? last[0].toUpperCase() : ''; // Ensure it's a string before calling toUpperCase
    return `${firstInitial}${lastInitial}`;
  };
  

  return (
    <nav
      className="flex lg:flex-row flex-col justify-between z-30 items-center h-16 w-full sticky bg-white top-0 shadow-sm"
      role="navigation"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-secondary font-semibold text-2xl p-4" data-testid="logo">
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
          className="p-4 cursor-pointer flex items-center gap-2"
          onClick={() => {
            if (!email) {
              setIsLoginOpen(true);
            } else {
              setIsUserModalOpen(true);
            }
          }}
        >
          {firstname ? (
            <div className="flex items-center gap-2">
              <div
                className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold"
              >
                {getInitials(firstname, lastname)}
              </div>
              <h1 className="text-primary">Hi, {firstname}!</h1>
            </div>
          ) : (
            <div className="flex items-center text-primary hover:text-secondary">
              <AccountCircleIcon className="scale-125" />
              <h1 className="ml-1">Sign In</h1>
            </div>
          )}
        </motion.li>


        <div data-testid="login-modal">
          {isLoginOpen && (
            <Login
              onClose={() => setIsLoginOpen(false)}
              onSwitchToSignUp={handleSignUp}
            />
          )}
        </div>

        {isSignUpOpen && (
          <SignUp
            onClose={() => setIsSignUpOpen(false)}
            onSwitchToLogin={handleLogin}
            data-testid="signup-modal"
          />
        )}

<       div data-testid="user-modal">
          {isUserModalOpen && (
            <User
              onClose={() => setIsUserModalOpen(false)}
              onLogout={handleLogout}
              onGoToDashboard={() => window.location.href = '/dashboard'}
              firstname={firstname}
              lastname={lastname}
              email={email}
            />
          )}
        </div>
      </ul>
    </nav>
  );
};

export default memo(Navbar);

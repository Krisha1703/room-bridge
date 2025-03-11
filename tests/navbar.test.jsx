// Jest test for the Navbar component
import { render, screen, fireEvent, waitFor, prettyDOM  } from '@testing-library/react';
import Navbar from '../src/components/navbar/Navbar';
import useUserStore from '@/app/state/store';
import '@testing-library/jest-dom'; 

// Mock Zustand store
jest.mock('@/app/state/store', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));


describe('Navbar Component', () => {
  //Test 1: Renders the "RoomBridge" logo
  it('renders the "RoomBridge" logo', () => {
    useUserStore.mockReturnValue({
      firstname: '',
      lastname: '',
      email: '',
      role: '',
    });

    render(<Navbar />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument(); // Logo should be visible
    expect(logo).toHaveTextContent('RoomBridge'); // Logo should have the correct text
  });

  //Test 2: Shows user initials instead of "Sign In" when the user is logged in
  it('shows user initials instead of "Sign In" when the user is logged in', () => {
    useUserStore.mockReturnValue({
      firstname: 'Maria',
      lastname: 'Smith',
      email: 'maria.smith@example.com',
      role: 'user',
    });

    render(<Navbar />);

    const signInButton = screen.queryByText('Sign In');
    expect(signInButton).not.toBeInTheDocument(); // "Sign In" button should not be visible

    const userGreeting = screen.getByText('Hi, Maria!');
    expect(userGreeting).toBeInTheDocument(); // User greeting should be visible
  });

  //Test 3: Shows "Sign In" when the user is not logged in
  it('shows the "Sign In" button when the user is not logged in', () => {
    useUserStore.mockReturnValue({
      firstname: '',
      lastname: '',
      email: '',
      role: '',
    });

    render(<Navbar />);

    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument(); // "Sign In" button should be visible
  });

  //Test 4: Opens the login modal when "Sign In" is clicked
  it('opens the login modal when "Sign In" is clicked', async () => {
    useUserStore.mockReturnValue({
      firstname: '',
      lastname: '',
      email: '',
      role: '',
    });

    render(<Navbar />);

    const signInButton = screen.getByText('Sign In');
    fireEvent.click(signInButton); // Click the "Sign In" button

    // Check if the login modal is opened
    await waitFor(() => {
      expect(screen.getByTestId('login-modal')).toBeInTheDocument();
    });
  });

  //Test 5: Checks the nav menus are rendered correctly
  it('renders nav menus correctly', () => {
    useUserStore.mockReturnValue({
      firstname: 'Maria',
      lastname: 'Smith',
      email: 'maria.smith@example.com',
      role: 'user',
    });

    render(<Navbar />);

    const homeMenu = screen.getByText('Home');
    const aboutMenu = screen.getByText('About Us');
    const exploreMenu = screen.getByText('Explore');
    const offersMenu = screen.getByText('Offers');
    const contactMenu = screen.getByText('Contact Us');

    expect(homeMenu).toBeInTheDocument();
    expect(aboutMenu).toBeInTheDocument();
    expect(exploreMenu).toBeInTheDocument();
    expect(offersMenu).toBeInTheDocument();
    expect(contactMenu).toBeInTheDocument();
  });

  //Test 6: Opens the user modal when the user is logged in and clicks their initials
  it('opens the user modal when the user is logged in and clicks their initials', async () => {
    useUserStore.mockReturnValue({
      firstname: 'Maria',
      lastname: 'Smith',
      email: 'maria.smith@example.com',
      role: 'user',
    });

    render(<Navbar />);

    // Find the user initials button
    const userButton = screen.getByText(/Hi, Maria/i);
    fireEvent.click(userButton); // Click the button

    // Check if the user modal is opened
    await waitFor(() => {
      const modal = screen.queryByTestId('user-modal');
      expect(modal).not.toBeNull();  // Ensure modal exists
      expect(modal).toBeVisible();   // Ensure modal is visible
    });  
    
  });
});

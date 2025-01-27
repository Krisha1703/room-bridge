"use client"
import { useState } from 'react';
import DashboardPanel from '../../components/user-dashboard/dashboard-panel'
import ProfileForm from '../../components/user-dashboard/profile-render';
import PreferencesForm from '../../components/user-dashboard/preferences-render';
import MainContent from '../../components/user-dashboard/main';

const UserDashboard = ({firstname, lastname, email}) => {
  const [activeMenu, setActiveMenu] = useState('profile');
  
  const [formPage, setFormPage] = useState(1);
  
  const [preferences, setPreferences] = useState({
    roomType: '',
    minBudget: 0,
    maxBudget: 1000,
  });

  const handlePreferencesChange = (e) => {
    const { id, value } = e.target;
    setPreferences({ ...preferences, [id]: id === "minBudget" || id === "maxBudget" ? Number(value) : value });
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setFormPage(1); 
  };

  const handleNext = () => {
    if (formPage < 2) setFormPage((prevPage) => prevPage + 1);
  };
  
  const handlePrevious = () => {
    if (formPage > 1) setFormPage((prevPage) => prevPage - 1);
  };
  
  const user = {
    firstName: firstname,
    lastName: lastname,
    email: email,
    mobile: "1234567890",
    profileImage: null,
    city: "",
    country: "",
    gender: "",
    dob: "",
    roomType: "",
    minBudget: 0,
    maxBudget: 1000,
  };

  return (
    <div className="flex h-screen">
      <DashboardPanel activeMenu={activeMenu} handleMenuClick={handleMenuClick} user={user} />
      <MainContent 
        activeMenu={activeMenu}
        renderProfileForm={() => <ProfileForm user={user} formPage={formPage} handleNext={handleNext} handlePrevious={handlePrevious} />}
        renderPreferencesForm={() => <PreferencesForm  preferences={preferences} handlePreferencesChange={handlePreferencesChange} />}
        formPage={formPage}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default UserDashboard;

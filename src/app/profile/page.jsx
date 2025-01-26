"use client";
import useUserStore from '@/app/state/store';
import React, { useState } from 'react';
import Image from 'next/image';

const UserDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('profile'); // Default menu is 'profile'
  const [formPage, setFormPage] = useState(1);

  // Dummy user data (replace with actual user data fetched from the backend)
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
    profileImage: "",
    city: "",
    country: "",
    gender: "",
    dob: "",
    roomType: "",
    minBudget: 0,
    maxBudget: 1000,
  };

  const [preferences, setPreferences] = useState({
    roomType: "",
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
    if (formPage < 2) setFormPage(formPage + 1);
  };

  const handlePrevious = () => {
    if (formPage > 1) setFormPage(formPage - 1);
  };

  // Render Profile Form Pages
  const renderProfileForm = () => {
    if (formPage === 1) {
      return (
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue={user.firstName}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              defaultValue={user.lastName}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              readOnly
              className="mt-1 border border-gray-300 rounded-md p-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              defaultValue={user.mobile}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </form>
      );
    } else if (formPage === 2) {
      return (
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="profileImage" className="block text-sm font-medium">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              defaultValue={user.city}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              defaultValue={user.country}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
              defaultValue={user.gender}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              defaultValue={user.dob}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </form>
      );
    }
  };

  const renderPreferencesForm = () => (
    <form className="grid grid-cols-1 gap-4">
      <div>
        <label htmlFor="roomType" className="block text-sm font-medium">
          Room Type
        </label>
        <select
          id="roomType"
          value={preferences.roomType}
          onChange={handlePreferencesChange}
          className="mt-1 border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="" disabled>
            Select Room Type
          </option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
          <option value="deluxe">Deluxe</option>
        </select>
      </div>
      <div>
        <label htmlFor="minBudget" className="block text-sm font-medium">
          Minimum Budget (per night)
        </label>
        <input
          type="number"
          id="minBudget"
          min="0"
          max="1000"
          value={preferences.minBudget}
          onChange={handlePreferencesChange}
          className="mt-1 border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="maxBudget" className="block text-sm font-medium">
          Maximum Budget (per night)
        </label>
        <input
          type="number"
          id="maxBudget"
          min="0"
          max="1000"
          value={preferences.maxBudget}
          onChange={handlePreferencesChange}
          className="mt-1 border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
    </form>
  );


  // Rendering different screens based on activeMenu
  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return (
            <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>
            {renderProfileForm()}
            <div className="mt-4 flex justify-between">
              <button
                className={`bg-secondary text-white px-4 py-2 rounded-md ${
                  formPage === 1 ? 'opacity-75 cursor-not-allowed' : 'hover:bg-secondary'
                }`}
                onClick={handlePrevious}
                disabled={formPage === 1}
              >
                Previous
              </button>

              {formPage === 2 ? (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  
                >
                  Save
                </button>
              ) : (
                <button
                className={`bg-primary text-white px-4 py-2 rounded-md`}
                onClick={handleNext}
                disabled={formPage === 2}
              >
                Next
              </button>
             )}
              
            </div>
          </div>
        );
      case 'preferences':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Preferences</h2>
            {renderPreferencesForm()}
          </div>
        );
      case 'rooms':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Rooms Booked</h2>
            <p className="text-gray-500">No rooms booked yet.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Column */}
      <div className="w-1/4 bg-primary p-4">
        <div className="mb-8 text-center ">
        
        <div className='relative ml-[8.5vw] rounded-full w-[75px] h-[75px] border-2 border-secondary border-solid'>
            <Image src="/user.png" alt='user' fill="contain"/>
        </div>

          <h2 className="text-2xl font-bold text-secondary mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-secondary text-lg">{user.email}</p>
        </div>
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full text-center text-md font-bold px-4 py-2 rounded-md ${
                activeMenu === 'profile' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary border-solid'
              }`}
              onClick={() => handleMenuClick('profile')}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className={`w-full text-center text-md font-bold px-4 py-2 rounded-md ${
                activeMenu === 'preferences' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary border-solid'
              }`}
              onClick={() => handleMenuClick('preferences')}
            >
              Preferences
            </button>
          </li>
          <li>
            <button
              className={`w-full text-center text-md font-bold px-4 py-2 rounded-md ${
                activeMenu === 'rooms' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary border-solid'
              }`}
              onClick={() => handleMenuClick('rooms')}
            >
              Rooms Booked
            </button>
          </li>
          <li>
            <button className="w-full text-center text-md font-bold px-4 py-2 rounded-md bg-primary text-secondary border-2 border-secondary border-solid">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="w-3/4 bg-white p-4">{renderContent()}</div>
    </div>
  );
};

export default UserDashboard;

const MainContent = ({ activeMenu, renderProfileForm, renderPreferencesForm, formPage, handleNext, handlePrevious }) => {
    const renderContent = () => {
      switch (activeMenu) {
        case 'profile':
          return renderProfileForm();
        case 'preferences':
          return renderPreferencesForm();
        case 'rooms':
          return <div className="p-4"><h2 className="text-xl font-bold mb-4">Rooms Booked</h2><p className="text-gray-500">No rooms booked yet.</p></div>;
        default:
          return null;
      }
    };
  
    return <div className="w-3/4 bg-white p-4">{renderContent()}</div>;
  };
export default MainContent;  
import Heading from "./heading";

const PreferencesForm = ({ preferences, handlePreferencesChange }) => {
    return (
    <>
    <Heading heading={"Manage your preferences"} />
      <form className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="roomType" className="block text-sm font-medium">Room Type</label>
          <select
            id="roomType"
            value={preferences.roomType}
            onChange={handlePreferencesChange}
            className="mt-1 border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="" disabled>Select Room Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <option value="deluxe">Deluxe</option>
          </select>
        </div>
        <div>
          <label htmlFor="minBudget" className="block text-sm font-medium">Minimum Budget (per night)</label>
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
          <label htmlFor="maxBudget" className="block text-sm font-medium">Maximum Budget (per night)</label>
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
      </> 
    );
  };
export default PreferencesForm;  
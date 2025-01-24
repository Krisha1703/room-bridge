import { useState } from "react";

const FilterPanel = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    roomType: "",
    facilities: [],
  });

  const handleCheckboxChange = (facility) => {
    setFilters((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility],
    }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-1/4 space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Filters</h2>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium text-gray-700">Price Range</label>
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="number"
            className="w-20 p-2 border rounded-md"
            value={filters.priceRange[0]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [Number(e.target.value), prev.priceRange[1]],
              }))
            }
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            className="w-20 p-2 border rounded-md"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [prev.priceRange[0], Number(e.target.value)],
              }))
            }
          />
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label className="text-sm font-medium text-gray-700">Room Type</label>
        <select
          className="w-full p-2 mt-2 border rounded-md"
          value={filters.roomType}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              roomType: e.target.value.toLowerCase(),
            }))
          }
        >
          <option value="">All</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
          <option value="family">Family</option>
          <option value="romantic">Romantic</option>
        </select>
      </div>

      {/* Facilities */}
      <div>
        <label className="text-sm font-medium text-gray-700">Facilities</label>
        <div className="mt-2 space-y-2">
          {["WiFi", "Pool", "Gym", "Parking"].map((facility) => (
            <div key={facility} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={facility}
                checked={filters.facilities.includes(facility)}
                onChange={() => handleCheckboxChange(facility)}
              />
              <label htmlFor={facility} className="text-gray-700">
                {facility}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;

import FilterPanel from "@/components/explore-rooms/filter-panel";
import RoomCards from "@/components/explore-rooms/room-cards";
import { useState } from "react";
import RoomsData from "@/constants/rooms-data"; // Adjust the path as needed

const ExploreRooms = () => {
  const [filteredRooms, setFilteredRooms] = useState(
    Object.values(RoomsData).flat() // Flatten all rooms into one array
  );

  const handleFilter = (filters) => {
    const allRooms = Object.values(RoomsData).flat();

    // Apply filters
    const filtered = allRooms.filter((room) => {
      const matchesPrice =
        !filters.priceRange ||
        (Number(room.price.replace(/[^0-9]/g, "")) >= filters.priceRange[0] &&
          Number(room.price.replace(/[^0-9]/g, "")) <= filters.priceRange[1]);

      const matchesType =
        !filters.roomType || room.name.toLowerCase().includes(filters.roomType);

      const matchesFacilities =
        !filters.facilities.length ||
        filters.facilities.every((facility) =>
          room.description.toLowerCase().includes(facility.toLowerCase())
        );

      return matchesPrice && matchesType && matchesFacilities;
    });

    setFilteredRooms(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex space-x-6">
        {/* Left Filter Panel */}
        <FilterPanel onFilter={handleFilter} />

        {/* Right Room Cards */}
        <RoomCards rooms={filteredRooms} />
      </div>
    </div>
  );
};

export default ExploreRooms;

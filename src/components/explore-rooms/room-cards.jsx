import Image from "next/image";

const RoomCards = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          {/* Image */}
          <div className="relative h-48">
            <Image
              src={room.image}
              alt={room.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          {/* Text Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{room.name}</h3>
            <p className="text-gray-600 text-sm">{room.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-bold">{room.price}</span>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCards;

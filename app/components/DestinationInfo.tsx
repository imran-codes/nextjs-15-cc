import { DestinationInfoTypes } from "@/types";

const DestinationInfo = ({ destination }: DestinationInfoTypes) => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Destination Name & Country */}
      <h1 className="text-3xl font-bold">
        {destination?.name}, {destination?.country}
      </h1>
      <p className="text-lg text-gray-600">{destination?.description}</p>

      {/* Destination Image */}
      <img
        src={destination?.image}
        alt={destination?.name}
        className="w-full rounded-lg mt-4 shadow-md"
      />

      {/* Additional Destination Details */}
      <div className="mt-6 space-y-2 text-gray-700">
        <p>
          <strong>📍 Population:</strong> {destination?.population}
        </p>
        <p>
          <strong>🌤️ Best Time to Visit:</strong> {destination?.bestTimeToVisit}
        </p>
        <p>
          <strong>💰 Currency:</strong> {destination?.currency}
        </p>
        <p>
          <strong>🗣 Language:</strong> {destination?.language}
        </p>
      </div>

      {/* List of Attractions */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Top Attractions</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {destination?.attractions?.map(
            (attraction: string, index: number) => (
              <li key={index}>{attraction}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default DestinationInfo;

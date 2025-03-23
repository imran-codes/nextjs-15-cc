"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ShortDestination = {
  id: number;
  name: string;
  country: string;
  image: string;
};

export default function DestinationCard() {
  const [destinations, setDestinations] = useState<ShortDestination[]>([]);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const basePath =
          process.env.NEXT_PUBLIC_API_URL ||
          "https://nextjs-15-cc-eight.vercel.app/";
        const res = await fetch(`${basePath}/api/destinations`);
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    }
    fetchDestinations();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {destinations?.map((dest) => (
        <div key={dest.id} className="border rounded-lg p-4">
          <Image
            src={dest.image}
            width={400}
            height={200}
            alt={dest.name}
            className="rounded-md w-full"
          />
          <h2 className="text-xl font-bold mt-2">
            {dest.name}, {dest.country}
          </h2>
          <Link href={`/destinations/${dest.id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

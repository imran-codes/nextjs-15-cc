import { Destination } from "@/types";

// Fetch destination data on the server side
export async function fetchDestination(
  id: string
): Promise<Destination | null> {
  const basePath = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(`${basePath}/api/destinations/${id}`);
  if (!res.ok) {
    return null; // Handle the error or 404
  }
  return res.json();
}

// Fetch all destinations data on the server side
export async function fetchAllDestinations(): Promise<Destination[]> {
  const basePath = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(`${basePath}/api/destinations`);
  return res.json();
}

import { destinations } from "@/lib/destinations";

export async function GET() {
  return Response.json(destinations);
}

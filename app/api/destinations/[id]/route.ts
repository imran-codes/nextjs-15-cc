import { destinations } from "@/lib/destinations";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const destination = destinations?.find(
    (destination) => destination.id.toString() === id
  );
  if (!destination) {
    return Response.json("Destination not found", { status: 404 });
  }

  return Response.json(destination);
}

// app/destinations/[id]/page.tsx

import { fetchDestination } from "@/app/actions/fetch";
import DestinationInfo from "@/app/components/DestinationInfo";

interface DestinationPageProps {
  params: Promise<{ id: string }>;
}

const DestinationPage = async ({ params }: DestinationPageProps) => {
  const { id } = await params;
  const destination = await fetchDestination(id);

  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return <DestinationInfo destination={destination} />;
};

export default DestinationPage;

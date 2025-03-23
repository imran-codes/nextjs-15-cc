import { fetchAllDestinations } from "../actions/fetch";
import CustomerReviews from "../components/CustomerReviews";
import DestinationReviewForm from "../components/DestinationReviewForm";

export default async function Reviews() {
  const allDestinations = await fetchAllDestinations();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Destination Reviews</h1>
      <DestinationReviewForm allDestinations={allDestinations} />
      <CustomerReviews />
    </div>
  );
}

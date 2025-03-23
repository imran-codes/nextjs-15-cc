// components/CustomerReviews.tsx
import { ReviewType } from "@/types";

const CustomerReviews = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold">All Reviews</h2>
      {reviews?.map((review, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <h3 className="font-bold">{review?.name}</h3>
          <p className="text-sm text-gray-600">{review?.destination}</p>
          <p>{review?.review}</p>
          <p className="font-semibold">Rating: {review?.rating} / 5</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;

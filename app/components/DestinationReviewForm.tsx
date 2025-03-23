"use client";

import { Destination } from "@/types";
import { useState } from "react";
import { submitReview } from "../actions/review";

const DestinationReviewForm = ({
  allDestinations,
}: {
  allDestinations: Destination[];
}) => {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await submitReview(formData);
    setMessage(result.message);
    console.log("Form submitted");
    window.location.reload(); // Reload the page after submitting the form
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-4 max-w-3xl mx-auto bg-white p-6 rounded-md shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Submit Your Review</h2>

      <div>
        <label htmlFor="destination" className="block mb-2 text-lg font-medium">
          Destination
        </label>
        <select
          name="destination"
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select a Destination</option>
          {allDestinations?.map((dest) => (
            <option key={dest.id} value={dest.name}>
              {dest.name} - {dest.country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block mb-2">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="review" className="block mb-2">
          Your Review
        </label>
        <textarea
          name="review"
          required
          className="w-full p-2 border rounded"
        ></textarea>
      </div>

      <div>
        <label htmlFor="rating" className="block mb-2">
          Rating
        </label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded w-full mt-4"
      >
        Submit Review
      </button>

      {message && <p className="mt-4 text-center text-lg">{message}</p>}
    </form>
  );
};

export default DestinationReviewForm;

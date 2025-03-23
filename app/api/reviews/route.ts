import { reviews } from "@/lib/reviews";
import { NextResponse } from "next/server";

// GET API to fetch all reviews
export async function GET() {
  const response = NextResponse.json(reviews);
  return response;
}

// POST API to submit a review
export async function POST(request: Request) {
  const {
    name,
    destination,
    review,
    rating,
  }: { name: string; destination: string; review: string; rating: number } =
    await request.json();

  // Generate a new reviewId (this would ideally be handled with a database in production)
  const newReview = {
    reviewId: reviews.length + 1,
    destination,
    name,
    review,
    rating,
  };

  // Add the new review to the array
  reviews.push(newReview);

  const response = NextResponse.json(
    { message: "Review submitted successfully!", newReview },
    { status: 201 }
  );

  return response;
}

import { reviews } from "@/lib/reviews";
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(reviews);
  return response;
}

export async function POST(req: Request) {
  try {
    const reviewData = await req.json();

    if (!reviewData.name || !reviewData.review || !reviewData.destination) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    reviews.push(reviewData);
    return NextResponse.json({ message: "Review submitted!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

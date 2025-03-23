"use server";

import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {
  const reviewData = {
    name: formData.get("name"),
    destination: formData.get("destination"),
    review: formData.get("review"),
    rating: Number(formData.get("rating")),
  };

  try {
    const basePath =
      process.env.NEXT_PUBLIC_API_URL || "https://nextjs-15-travel.vercel.app";
    const response = await fetch(`${basePath}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) throw new Error("Failed to submit review");

    revalidatePath("/reviews"); // Revalidate the page to update UI

    return { success: true, message: "Review submitted successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to submit review." };
  }
}

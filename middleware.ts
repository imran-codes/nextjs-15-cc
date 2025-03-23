import { NextRequest, NextResponse } from "next/server";

interface CustomNextRequest extends NextRequest {
  geo?: {
    country: string;
  };
}

export function middleware(req: CustomNextRequest) {
  const country = req.geo?.country || "UK";
  // console.log("Middleware executed - Country:", country);

  const response = NextResponse.next();
  response.headers.set("X-User-Country", country);

  return response;
}

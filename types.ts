export type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  population: string;
  bestTimeToVisit: string;
  attractions: string[];
  currency: string;
  language: string;
};

export type DestinationInfoTypes = {
  destination: Destination | null;
};

export type ReviewType = {
  reviewId: number;
  destination: string;
  name: string;
  review: string;
  rating: number;
};

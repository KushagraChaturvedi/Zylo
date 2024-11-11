export interface OfferCardData {
  price: string;
  originalPrice: string;
  monthlyPrice: string;
  offerDetails: string[];
  buttonText: string;
  duration: string;
  highlights: string[];
  colorPalette?: "blue" | "orange" | "pinkPurple";
}